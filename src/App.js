import React, { Component } from 'react';
import './App.css';
import {fetchCardData} from'./Components/Api';
import Card from './Components/Card/Card';
import Chart from './Components/Chart/Chart';
import Country from './Components/CountryPicker/Country';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{},
      country:' ',
    }
  }

  async componentDidMount(){
      const data  = await fetchCardData();
      this.setState({
        data: data.data,
      })
  }

  handleCountryChange = async (country) => {
    const { data } = await fetchCardData(country);

    this.setState({ data, country: country });
  }

  render(){
  return (
    <div className="App">
    <Card data={this.state.data}/> 
    <Country handleCountryChange= {this.handleCountryChange}/>
    <Chart data={this.state.data} country={this.state.country}/>
    </div>
  );
  }
  }

export default App;
