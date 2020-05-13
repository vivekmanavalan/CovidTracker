import React, { Component } from 'react';
import classes from './App.css';
import {fetchCardData, fetchStatesData, fetchDistricts, fetchDistrictData} from'./Components/Api';
import Card from './Components/Card/Card';
import Chart from './Components/Chart/Chart';
import Country from './Components/CountryPicker/Country';
import States from './Components/CountryPicker/States';
import StateCard from './Components/Card/StateCard';
import StateChart from './Components/Chart/StateChart';
import image from './Components/Images/image.png'; 
import ParticlesBg from 'particles-bg';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{},
      districtData:[],
      country:' ',
      stateName: '',
      isIndia: false,
      index: 0,
    }
  }

  async componentDidMount(){
      const data  = await fetchCardData();
      this.setState({
        data: data.data,
      })
  }

  handleCountryChange = async (country) => {
    const data = await fetchCardData(country, this.state.index );
    if(country=="India"){
      this.setState({ data, country: country, isIndia: true, stateName:'' });
    }
    else{
    this.setState({ data:data.data, country: country, isIndia: false, stateName:'', districtData: [] });
    }
  }

  handleStateChange = async (index) => {
    const data = await fetchStatesData(index);
    this.setState({ data, districtData: data.districtData, index: index, isState: true, stateName: data.state_name});
  }

  handleDistrictChange = async (districtName) => {
    const data = await fetchDistrictData(this.state.stateName,districtName);
    this.setState({data})
  }

  render(){  
    let config ={
      position: "fixed",
      zIndex: -7,
      top: 0,
      left: 0
     }
  return (
    <div className={classes.container}>
    <ParticlesBg type="circle" color="#ADD8E6" num={8} config={config} bg={true}/>  
    <img className={classes.image} src={image}  alt="COVID-19"/>
    {
    this.state.isIndia ?
    <div>
      <StateCard data={this.state.data}/> 
      <Country handleCountryChange= {this.handleCountryChange}/>
       <States handleStateChange ={this.handleStateChange} districtData={this.state.districtData}handleDistrictChange = {this.handleDistrictChange} />  
       <StateChart data={this.state.data}/>
       </div>
      :
      <div>
      <Card data={this.state.data}/> 
      <Country handleCountryChange= {this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>
      </div>
  }
    </div>
  );
  }
  }

export default App;
