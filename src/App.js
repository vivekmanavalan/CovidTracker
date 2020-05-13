import React, { Component } from 'react';
import './App.css';
import {fetchCardData, fetchStatesData} from'./Components/Api';
import Card from './Components/Card/Card';
import Chart from './Components/Chart/Chart';
import Country from './Components/CountryPicker/Country';
import States from './Components/CountryPicker/States';
import StateCard from './Components/Card/StateCard';
import StateChart from './Components/Chart/StateChart';
import image from './Components/Images/image.png'; 
import styles from './'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{},
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
      this.setState({ data, country: country, isIndia: true });
    }
    else{
    this.setState({ data:data.data, country: country, isIndia: false });
    }
  }

  handleStateChange = async (index) => {
    console.log("inside state change app.js",index);
    const data = await fetchStatesData(index);
    this.setState({ data, index: index, isState: true});
  }

  render(){
    
  return (
    <div>
    <img src={image}  alt="COVID-19"/>
    {this.state.isIndia ?
    <div>  
      <StateCard data={this.state.data}/> 
      <Country handleCountryChange= {this.handleCountryChange}/>
       <States handleStateChange ={this.handleStateChange}/>  
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
