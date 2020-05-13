import React, {useState, useEffect} from 'react';
import {FormControl, NativeSelect, Select, MenuItem, InputLabel} from '@material-ui/core';
import {fetchIndianStates} from '../Api';
import './Country.module.css';

const FetchStates  = ({ handleStateChange, districtData, handleDistrictChange }) => {
    console.log("dtData",districtData);
    const [states, setstates] = useState([]);

    useEffect (() =>{
        const fetchData = async() => {
        const data = await fetchIndianStates();
        setstates(data);
        }
        fetchData();
    },[]);
    return(
        <div className="formControl">
             
                {/* <NativeSelect defaultValue="" onChange={(e)=>handleStateChange(e.target.value)}>
                    <option value="All States">All States</option>
                    {states.map((state,i)=>
                    <option key={i} value={i}>{state}</option>
                    )}

                </NativeSelect> &nbsp; */}
                <Select defaultValue="All States" onChange={(e)=> {
                    handleStateChange(e.target.value)
                    }}>
                    <MenuItem value="All States">All States</MenuItem>
                    {states.map((state,i)=>
                      <MenuItem key={i} value={i}>{state}</MenuItem>
                    )}

                </Select>&nbsp;

                &nbsp;&nbsp;
                <Select defaultValue="All Districts" onChange={(e)=> handleDistrictChange(e.target.value)}>
                    <MenuItem value="All Districts">All Districts</MenuItem>
                    {districtData.map((district) =>
                       <MenuItem key={district} value={district}>{district}</MenuItem>  
                    )
                    
                    }

                </Select> 

                
                {/* &nbsp;<NativeSelect defaultValue="" onChange={(e)=>handleStateChange(e.target.value)}>
                        <option value="All States">All Districts</option>
                        {states.map((state,i)=>
                        <option key={i} value={i}>{state}</option>
                        )}

                </NativeSelect> */}
        </div>
    );

}
export default FetchStates;