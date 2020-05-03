import React, {useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchIndianStates} from '../Api';
import './Country.module.css';

const FetchStates  = ({ handleStateChange }) => {
    
    const [states, setstates] = useState([]);

    useEffect (() =>{
        const fetchData = async() => {
        const data = await fetchIndianStates();
        setstates(data);
        }
        fetchData();
    },[]);

    return(
        <div>
            <FormControl className="formControl">
                <NativeSelect defaultValue="" onChange={(e)=>handleStateChange(e.target.value)}>
                    <option value="All States">All States</option>
                    {states.map((state,i)=>
                    <option key={i} value={i}>{state}</option>
                    )}

                </NativeSelect>
            </FormControl>
        </div>
    );

}
export default FetchStates;