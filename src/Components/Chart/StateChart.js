import React, {useState, useEffect} from 'react';
import {fetchStatesData} from '../Api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
 
const StateChart = (props) => {
  
    const barChart = (
      props.data ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [props.data.confirmed, props.data.recovered, props.data.deaths],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: "Current condition in the selected state" },
          }}
        />
      ) : null
    );
  
    return(
        <div>
            {barChart}
        </div>
    )
  };
export default StateChart;