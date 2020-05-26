import React, {useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries}  from '../Api';
import classes from './Country.module.css';


const Country = ({handleCountryChange,handleStateChange}) => {
const [country, setcountry] = useState([]);
useEffect (() => {
    const fetchData = async() =>{
         const country = await fetchCountries();
         setcountry (country);
    }

    fetchData();
},[]);

    return(
      <div className={classes.container}>
      Select India for states data <br></br><br></br>
      <FormControl className={classes.formControl}>
        
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {country.map((country, i)=>
                <option key={i} value={country}>{country}</option>
            )}
        </NativeSelect>
      </FormControl >
        </div>
);
}
export default Country;