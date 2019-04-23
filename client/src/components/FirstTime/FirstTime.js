import React from 'react';
import "./FirstTime.css";

const FirstTime = () => {
  return (
    <div className = "ft-component-wrapper">

      <div className = "background-holder">

        <div className = "background-text">
          <h1 className = "background-title">First Time ?</h1>
          <p className = "background-description">Blah blah</p>
        </div>

        <div className = "background-color-overlay"></div>
      </div>
    </div>
  );
}
 
export default FirstTime;