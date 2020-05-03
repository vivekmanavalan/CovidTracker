import axios from 'axios';


const url="https://covid19.mathdro.id/api";

export const fetchCardData = async (country,index) =>{
    let changeableUrl = url;
    if(country=="India"){
        console.log("inside india if index.js")
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
        const { data } = await axios.get(`${url}/countries`);
        return data.countries.map((country)=> country.name); 
    } catch (error) {
        return error;
    }
}

export const fetchIndianStates = async () => {
try {
    const { data } = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    return data.data.regional.map((state) => state.loc);
} catch (error) {
    return error;
}
}

export const fetchStatesData = async (state) => {
 try {
     const { data } = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
     console.log("statesData",data);
     let calculateActive = data.data.regional[state].confirmedCasesIndian + data.data.regional[state].confirmedCasesForeign - data.data.regional[state].discharged - data.data.regional[state].deaths;
     console.log("calculate",calculateActive);
     const modifiedData = {
        confirmed: calculateActive,
        recovered: data.data.regional[state].discharged,
        deaths: data.data.regional[state].deaths
    }
     return modifiedData;
 } catch (error) {
     return error;
 }
}