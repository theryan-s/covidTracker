import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../../App.scss';

const Chart = ({covidGlobalData: { confirmed, recovered, deaths },  covidCountryData : { countryConfirmed, countryRecovered, countryDeaths}, covidCountryName: { countryText }}) => {
    const barChart = (
        <Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'Global Status',
                        backgroundColor: ['#a6d4fa90', '#81c78490', '#e5737390'],
                        data: [confirmed, recovered, deaths],
                    },
                    {
                        label: `{$countryText}`,
                        backgroundColor: ['#267cc2', '#16761b', '#961717'],
                        data: [countryConfirmed, countryRecovered, countryDeaths]
                    }
            ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Global state vs $covidCountryName}` },
                // scales: {
                //     yAxes: [
                //             {
                //             ticks: {
                //                 fontSize: 20,
                //                 max: {confirmed},
                //                 min: 0,
                //                 stepSize: 100000
                //             }
                //         }
                //     ],
                //     xAxes: [
                //             {
                //             ticks: {
                //                 fontSize: 20
                //             }
                //         }
                //     ]
                // }
            
            }}
        />
    );
    
    return(
        <div className="chart">
            {barChart}
        </div>
    )
}

export default Chart;