import React, {useState, useEffect} from 'react';
import {fetchChartData} from '../Api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
 
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchChartData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
  
    const barChart = (
      confirmed ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      ) : null
    );
  
    const lineChart = (
      dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },
            ],
          }}
        />
      ) : null
    );
  
    if(country.length>2){
    return (
      <div className={styles.container}>
        {barChart}
      </div>
    );
    }
    else{
      return (
        <div className={styles.container}>
          {lineChart}
        </div>
      );
    }
  };
export default Chart;