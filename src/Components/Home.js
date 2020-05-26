import React, { Component } from 'react';
import classes from '../App.css';
import {fetchCardData, fetchStatesData, fetchDistricts, fetchDistrictData} from'./Api';
import Card from './Card/Card';
import Chart from './Chart/Chart';
import Country from './CountryPicker/Country';
import States from './CountryPicker/States';
import StateCard from './Card/StateCard';
import StateChart from './Chart/StateChart';

class Home extends Component {
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
  return (
    <div className={classes.container}>
    {
    this.state.isIndia ?
    <div onClick={this.props.click}>
      <StateCard data={this.state.data}/> 
      <Country handleCountryChange= {this.handleCountryChange}/>
       <States handleStateChange ={this.handleStateChange} districtData={this.state.districtData}handleDistrictChange = {this.handleDistrictChange} />  
       <StateChart data={this.state.data}/>
       </div>
      :
      <div onClick={this.props.click}>
      <Card data={this.state.data}/> 
      <Country handleCountryChange= {this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>
      </div>
  }
    </div>
  );
  }
  }

export default Home;
