import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './components/home';
import Navbar from './components/customNavbar';
import { Nav } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Router>
         <div className="background">
         <Navbar/> 
         <Route exact path="/"component={home}/>
         </div>
      </Router>
      
    );
  }
}

export default App;
