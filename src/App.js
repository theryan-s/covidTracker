import React, { Component } from 'react';
import Cards from './Components/Cards/Cards';
import CountryCards from './Components/Cards/CountryCards';
import Chart from './Components/Chart/Chart';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from './Components/Footer/Footer'
import './App.scss';
import axios from 'axios';

class App extends Component {
  constructor(){
        super();
        this.state = {
          globalData: {},
          countryData: {},
          country: '',
          countryFound: false,
          countryText: '',
          isLoaded: false,
          isSearchLoaded: false,
          chartData: {}
        }
    }

    //Obtain API data for Default (GLOBAL status)
    componentDidMount(){
        axios({
          url: `https://api.covid19api.com/summary`,
          method: `GET`,
          responseType: `json`
        }).then((res) => {
          const globalConfirmed = res.data.Global.TotalConfirmed;
          const globalRecovered = res.data.Global.TotalRecovered;
          const globalDeaths = res.data.Global.TotalDeaths;
          const lastUpdatedDate = res.data.Date;
          console.log(res)

          this.setState({
            globalData: {
              confirmed: globalConfirmed, 
              recovered: globalRecovered, 
              deaths: globalDeaths,
              date: lastUpdatedDate
            },
            isLoaded: true,
          })

        })
    }

    //Obtain API data for Input Country
    handleChange = (e) => {
      this.setState({
        country: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      //Reset to default state when user submits new input
      this.setState({
        countryFound: false,
      });

      axios({
        url: `https://api.covid19api.com/summary`,
        method: `GET`,
        responseType: `json`
      }).then((res) => {
        const countriesArray = res.data.Countries;

        for (let i = 0; i < countriesArray.length; i++){
          if (countriesArray[i].Country.toLowerCase() === this.state.country.toLowerCase()){
            console.log(countriesArray[i].TotalConfirmed);
            this.setState({
              countryData: {
                countryConfirmed: countriesArray[i].TotalConfirmed,
                countryRecovered: countriesArray[i].TotalRecovered,
                countryDeaths: countriesArray[i].TotalDeaths,
                date: countriesArray[i].Date
              },
              countryFound: true,
              countryText: countriesArray[i].Country,
              isSearchLoaded: true
            })
          }
        }
        if (this.state.countryFound === false){
          alert("Please try another country!")
        }
        this.setState({
          country: '',
        })
      })
    }
    

  render(){

    //MATERIALUI STYLING
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));

    
      return (
        
        <div className = "App">
          <div className="row">
            <h1>Covid Tracker</h1>    
            {this.state.isLoaded ? 
              < Cards covidGlobalData = {this.state.globalData}/>
              : <p>loading...</p>
            }       
            <form className = "formContainer" onSubmit={ this.handleSubmit }>
              <TextField className = "input" id="standard-basic" label="Country" inputProps={{style: {fontSize: 18}}} InputLabelProps={{style: {fontSize: 18}}} type="text" value={this.state.country} onChange = {this.handleChange} placeholder="Search Country"/>
              
              <Button className="button" variant="contained" size="medium" color="primary" style={{ fontSize: '20px'}} type="submit">Search</Button>
            </form>
            <h2>{this.state.countryText}</h2>
            {this.state.isSearchLoaded ?
              < CountryCards covidCountryData = {this.state.countryData}/>
              : <p>Please input a country!</p> 
            }
            {/* {this.state.isSearchLoaded ?
              < Chart covidGlobalData = {this.state.globalData} covidCountryData = {this.state.countryData} covidCountryName = {this.state.countryText}/>
              : null
            } */}
          </div>
          < Footer />
        </div> 
      );
    }
}


export default App;
