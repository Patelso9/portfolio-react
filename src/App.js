// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import Nav from './components/Nav/Nav';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={About} exact/>
          <Route path="/portfolio" component={Github} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }}

export default App;

// --------- TRYING TO USE NAV BAR ------------//
// return (
//   <div className="profile-App">
//     <div className="profile-header"> 
//       <Nav />
//       <h1>Sonali's Profile</h1>
//     </div>
    
//     < div className="profile-about">
//       <About />
//     </div>
    
//     <div className="profile-contact">
//       <Contact />
//     </div>
    
//     <div className="repo-App">
//       {/* <Github /> */}
//     </div>
// </div>
// )