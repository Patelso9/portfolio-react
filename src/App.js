// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import React from 'react'
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';


function App() {

  return (
    <div className="profile-App">
      <div className="profile-header"> 
        <h1>Sonali's Profile</h1>
      </div>
      
      < div className="profile-about">
        <About />
      </div>
      
      <div className="profile-contact">
        <Contact />
      </div>
      
      <div className="repo-App">
        <Github />
      </div>

    </div>
  )

}

export default App;
