import React from 'react';
import resume from './Resume.pdf';

const Resume = () => {

    return (
      <div>
        <h2>Resume</h2>
        <object data={resume} type="application/pdf" width="100%" height="500px"> </object>
      </div>
    )
}


export default Resume