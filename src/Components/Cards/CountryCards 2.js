import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './cards.scss';

const CountryCards = ({ covidCountryData : { countryConfirmed, countryRecovered, countryDeaths, date}}) => { 
    return(
        <div className="status">
            <Grid container spacing = {5} justify ="center">
                <Grid className="countryCard1" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Confirmed</Typography>
                        <Typography variant="h4">
                            <CountUp end = {countryConfirmed} duration={2} separator=","/>
                        </Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid className="countryCard2" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Recovered</Typography>
                        <Typography variant="h4">
                        <CountUp end = {countryRecovered} duration={2} separator=","/>
                        </Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid className="countryCard3" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Deaths</Typography>
                        <Typography variant="h4"><CountUp end = {countryDeaths} duration={2} separator=","/></Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default CountryCards;

