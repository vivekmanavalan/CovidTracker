import React from 'react';
import {Card, Grid, CardContent, Typography} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const card =(props) =>{
    if(props.data.confirmed){ 
    return(
        <div className={styles.container}>    
        <Grid container spacing={3} justify="center">
         <Grid item xs={12} md={3} component={Card} className={cx(styles.infected)}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={props.data.confirmed.value} duration={2} />
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"component="p">Number of active cases</Typography>
            </CardContent>
         </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={props.data.recovered.value} duration={2} />
            </Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"component="p">Number of recovered cases</Typography>
            </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={props.data.deaths.value} duration={2} />
            </Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"component="p">Number of deaths cases</Typography>
            </CardContent>
        </Grid>

    </Grid>
    </div>
    );
    }
    else{
     return(
         <h3>loading..</h3>
     )
    }
}
export default card;