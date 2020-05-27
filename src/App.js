import React, { Component } from 'react';
import classes from './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import GuideLines from './Components/Guidelines/Guidelines';
import Nav from './Components/Nav/Nav';
import SideDrawer from './Components/SideBar/SideDrawer';
import ParticlesBg from 'particles-bg';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sideDrawer: false,
    }
  }
  handleSideDrawer = () => {
    this.setState((prevState) =>{
      return {sideDrawer: !prevState.sideDrawer};
      });
    }

  handleSideDrawerClose = () => {
    this.setState({sideDrawer: false});
  }
  render(){
    let config ={
      position: "fixed",
      zIndex: -7,
      top: 0,
      left: 0
     }
    return(
      <Router>
      <div>
      <ParticlesBg type="circle" color="#CCE0F4" num={8} config={config} bg={true}/>  
      <Nav handleSideDrawer = {this.handleSideDrawer}/>
      <SideDrawer show={this.state.sideDrawer} click={this.handleSideDrawerClose}/>
        <Switch>
        <Route path="/guidelines">
          <GuideLines click={this.handleSideDrawerClose} />
        </Route>
        <Route path="/">
          <Home click={this.handleSideDrawerClose} />
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }
  }

export default App;
