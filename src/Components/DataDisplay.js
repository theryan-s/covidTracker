import React, { Component } from 'react';
import '../App.scss';

class DataDisplay extends Component {
    
    render(){
        return(
        <div className="status">
            <div className="totalConfirmed">
                <h2>Total Confirmed</h2>
                <p>{this.props.TotalConfirmed}</p>
            </div>
            <div className="totalRecovered">
                <h2>Total Recovered</h2>
                <p>{this.props.TotalRecovered}</p>
            </div>
            <div className="totalDeaths">
                <h2>Total Deaths</h2>
                <p>{this.props.TotalDeaths}</p>
            </div>
        </div>
        )
    }
}

export default DataDisplay;