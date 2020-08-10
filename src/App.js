import React, { Component } from 'react';
import Form from './Components/Form';
import DataDisplay from './Components/DataDisplay';
import './App.scss';
import axios from 'axios';

class App extends Component {
  constructor(){
        super();
        this.state = {
          data: [],
          country: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
          console.log(res)

          this.setState({
            data: [globalConfirmed, globalRecovered, globalDeaths]
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
      axios({
        url: `https://api.covid19api.com/summary`,
        method: `GET`,
        responseType: `json`
      }).then((res) => {
        const countriesArray = res.data.Countries;

        for (let i = 0; i < countriesArray.length; i++){
          if (countriesArray[i].Country === this.state.country){
            console.log(countriesArray[i].TotalConfirmed);
            
          // } else {
          //   alert("Please try another country!");
          //   e.preventDefault();
          } 
        }

        this.setState({
          country: ""
        })
      })
    }


  render(){
      return (
        <div className = "App">
          <div className="row">
            <h1>Covid Tracker</h1>
            <ul>
              { < DataDisplay TotalConfirmed = {this.state.data[0]} TotalRecovered = {this.state.data[1]} TotalDeaths = {this.state.data[2]}/>
              }
            </ul>
            <form onSubmit={ this.handleSubmit }>
              <label>
              <input type="text" value={this.state.country} onChange = {this.handleChange} placeholder="Search Country..."/>
              </label>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      );
    }
}

export default App;
