import axios from 'axios';


const url="https://covid19.mathdro.id/api";

export const fetchCardData = async (country,index) =>{
    let changeableUrl = url;
    if(country=="India"){
        //if condition to display statewise data
        changeableUrl = "https://api.covid19india.org/data.json";
        try {
        const { data } = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed: data.statewise[0].active,
            recovered: data.statewise[0].recovered,
            deaths: data.statewise[0].deaths
        }
        return modifiedData;
        }
        catch (error) {
        return error;   
        }
}
else{
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
    try {
        const data = await axios.get(changeableUrl);
        return data;
        
    } catch (error) {
        return error;
    }
}
}

export const fetchChartData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map(({confirmed, deaths, reportDate: date}) =>({confirmed: confirmed.total, deaths: deaths.total, date}));
        
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        //Fetching countries for the dropdown
        const { data } = await axios.get(`${url}/countries`);
        return data.countries.map((country)=> country.name); 
    } catch (error) {
        return error;
    }
}

export const fetchIndianStates = async () => {
try {
    //Getting the state names for dropdown
    const { data } = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    return data.data.regional.map((state) => state.loc);
} catch (error) {
    return error;
}
}

export const fetchStatesData = async (state) => {
 try {
     //Getting states data from the api
     const { data } = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
     let calculateActive = data.data.regional[state].confirmedCasesIndian + data.data.regional[state].confirmedCasesForeign - data.data.regional[state].discharged - data.data.regional[state].deaths;
     const districtList = await fetchDistricts(data.data.regional[state].loc);
     const modifiedData = {
        districtData: districtList,
        confirmed: calculateActive,
        recovered: data.data.regional[state].discharged,
        deaths: data.data.regional[state].deaths,
        state_name: data.data.regional[state].loc
    }
     return modifiedData;
 } catch (error) {
     return error;
 }
}

export const fetchDistricts = async (stateName) => {
    try {
     //Getting district list with the state name using the stateName parameter
     if(stateName=="Dadar Nagar Haveli"){
         stateName="Dadra and Nagar Haveli and Daman and Diu";
     }
     const  { data }  = await axios.get("https://api.covid19india.org/state_district_wise.json");
     console.log("statename fetchdistricts", stateName);
     console.log("fetchdistrict data", data[stateName]);
     return Object.keys(data[stateName].districtData);
    } catch (error) {
        return error;
    }
}

//Fetching data for each districts
export const fetchDistrictData = async (stateName, districtName) => {
    try {
        const { data } = await axios.get("https://api.covid19india.org/state_district_wise.json");
        console.log("dtName",districtName);
        const modifiedData = {
            confirmed: data[stateName].districtData[districtName].active,
            recovered: data[stateName].districtData[districtName].recovered,
            deaths: data[stateName].districtData[districtName].deceased
        }
        console.log("modifedData",modifiedData);
        return modifiedData;
    } catch (error) {
        
    }
}

