import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import '../App.scss';

class Cards extends Component { 
    render(){
        //SETUP CONST TO DESTRUCTURE
        return(
        <div className="status">
            <Grid container spacing = {3} justify ="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography gutterBottom>Confirmed</Typography>
                        <Typography variant="h4">{this.props.covidData.confirmed}</Typography>
                        <Typography>{this.props.covidData.date}</Typography>
                        <Typography>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography gutterBottom>Recovered</Typography>
                        <Typography variant="h4">{this.props.covidData.recovered}</Typography>
                        <Typography>{this.props.covidData.date}</Typography>
                        <Typography>Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography gutterBottom>Deaths</Typography>
                        <Typography variant="h4">{this.props.covidData.deaths}</Typography>
                        <Typography>{this.props.covidData.date}</Typography>
                        <Typography>Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default Cards;

