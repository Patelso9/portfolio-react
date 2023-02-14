import React, { Component } from 'react';
import { Document } from 'react-pdf';
import resume from './Resume.pdf';

const Resume = () => {

    return (
      <div>
        <h2>Resume</h2>
        <Document file={resume}/>
      </div>
    )
}


export default Resume