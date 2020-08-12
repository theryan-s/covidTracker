import React, { Component } from 'react';
import Cards from './Components/Cards';
import './App.scss';
import axios from 'axios';

class App extends Component {
  constructor(){
        super();
        this.state = {
          data: {},
          country: '',
          countryFound: false
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
            data: {
              confirmed: globalConfirmed, 
              recovered: globalRecovered, 
              deaths: globalDeaths,
              date: lastUpdatedDate
            }
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
          if (countriesArray[i].Country === this.state.country){
            console.log(countriesArray[i].TotalConfirmed);
            this.setState({
              data: {
                confirmed: countriesArray[i].TotalConfirmed,
                recovered: countriesArray[i].TotalRecovered,
                deaths: countriesArray[i].TotalDeaths,
                date: countriesArray[i].Date
              },
              countryFound: true,
            })
            console.log(this.state);
          }
        }

        if (this.state.countryFound === false){
          alert("Please try another country!")
        }

        // this.setState({
        //   country: ''
        // })
      })
      
    }


  render(){
      return (
        <div className = "App">
          <div className="row">
            <h1>Covid Tracker</h1>              

            < Cards covidData = {this.state.data}/>
  
            <form onSubmit={ this.handleSubmit }>
              <label>
              <input type="text" value={this.state.country} onChange = {this.handleChange} placeholder="Search Country..."/>
              </label>
              <button type="submit">Search</button>
            </form>
            <h2>{this.state.country}</h2>
          </div>
        </div>
      );
    }
}


export default App;
