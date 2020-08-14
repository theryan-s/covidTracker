import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../../App.scss';

const Chart = ({covidGlobalData: { confirmed, recovered, deaths},  covidCountryData : { countryConfirmed, countryRecovered, countryDeaths}}) => {
    const globalActiveCases = confirmed - recovered - deaths;
    const countryActiveCases = countryConfirmed - countryRecovered - countryDeaths;

    const barChart = (
        <Pie
            data={{
                labels: ['Active', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'Global Status',
                        backgroundColor: ['#a6d4fa90', '#81c78490', '#e5737390'],
                        data: [globalActiveCases, recovered, deaths],
                    },
            ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Global State` },
            }}
        />
    );

    const countryChart = (
        <Pie
            data={{
                labels: ['Active', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        backgroundColor: ['#267cc290', '#16761b90', '#96171790'],
                        data: [countryActiveCases, countryRecovered, countryDeaths]
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Country State` },
            }}
        />
    );
    
    return(
        <div className="chart">
            {barChart}
            {countryChart}
        </div>
    )
}

export default Chart;