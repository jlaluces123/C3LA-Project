import React from 'react';
import "./FirstTime.css";

import c3Logo from "../../assets/c3la-logo-black.png";

const FirstTime = () => {
  return (
    <div className = "ft-component-wrapper">

      <section className = "background-holder">
        <div className = "background-text">
          <h1 className = "background-title">First Time Guests</h1>          
        </div>
        <div className = "background-color-overlay"></div>
      </section>

      <section className = "first-time-card">
        <h1 style = {{ fontSize: "2.5rem", marginBottom: 50 }}>Help Us Get To Know You</h1>        
        <div className = "card-wrapper">
          {/* Left Side Of Card */}
          <div className = "left-side-logo separate">
            <img src = {c3Logo} alt = "C3 LOS ANGELES LOGO BLACK" />
          </div>
          {/* Right Side of Card */}
          <div className = "right-side-logo separate">

          </div>
        </div>
      </section>

    </div>
  );
}
 
export default FirstTime;