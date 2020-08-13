import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import '../../App.scss';

const Cards = ({covidGlobalData: { confirmed, recovered, deaths, date } }) => { 
    return(
        <div className="status">
            <Grid container spacing = {5} justify ="center">
                <Grid className="card1" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Global Confirmed</Typography>
                        <Typography variant="h4">
                            <CountUp end = {confirmed} duration={2} separator=","/>
                        </Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid className="card2" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Global Recovered</Typography>
                        <Typography variant="h4">
                        <CountUp end = {recovered} duration={2} separator=","/>
                        </Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid className="card3" item component={Card} xs={12} md={3}>
                    <CardContent>
                        <Typography gutterBottom>Global Deaths</Typography>
                        <Typography variant="h4"><CountUp end = {deaths} duration={2} separator=","/></Typography>
                        <Typography>{new Date(date).toDateString()}</Typography>
                        <Typography>Death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

