import React from 'react';
import "./FirstTime.css";

import c3Logo from "../../assets/c3la-logo-black.png";

class FirstTime extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",     
    message: ""   
  };

  handleInputChange = event => {
    event.preventDefault();    
    this.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name} : ${event.target.value}`);
  };

  render() {
    return (
      <div className = "ft-component-wrapper">
  
        <section className = "background-holder">
          <div className = "background-text">
            <h1 className = "background-title">First Time Guests</h1>          
          </div>
          <div className = "background-color-overlay"></div>
        </section>
  
        <section className = "first-time-card">
          <h1 className = "card-header-text">Help Us Get To Know You</h1>        
          <div className = "card-wrapper">
            {/* Left Side Of Card */}
            <div className = "left-side-logo separate">
              <img src = {c3Logo} alt = "C3 LOS ANGELES LOGO BLACK" />
            </div>
            {/* Right Side of Card */}
            <div className = "right-side-logo separate">
              <h1 style = {{ textAlign: "center", marginTop: 10 }}>First Time Guest Form</h1>
              <form method="POST" action="https://formspree.io/jlalucescareer123@gmail.com">

                {/* First Name Input */}                                                                                 
                <div className = "cta-name">
                  <label for = "firstName">First Name</label>
                  <input
                    required
                    id = "firstName"
                    className = "cta-name-input"
                    type = "text"                           
                    name = "firstName"
                    value = {this.state.firstName}
                    onChange = {this.handleInputChange}
                    placeholder = "John"
                  />
                </div>          

                {/* Last Name Input */}
                <div className = "cta-name">
                  <label for = "lastName">Last Name</label>
                  <input
                    required
                    id = "lastName"
                    className = "cta-name-input"
                    type = "text"                           
                    name = "lastName"
                    value = {this.state.lastName}
                    onChange = {this.handleInputChange}
                    placeholder = "Smith"
                  />
                </div>

                {/* Email Input */}
                <div className = "cta-name">
                  <label for = "email">Email</label>
                  <input
                    required
                    id = "email"
                    className = "cta-name-input"
                    type = "text"                           
                    name = "email"
                    value = {this.state.email}
                    onChange = {this.handleInputChange}
                    placeholder = "johnsmith@email.com"
                  />
                </div>

                {/* How Did You Hear About Us ? */}
                <div className = "cta-options">
                  <label className = "cta-capitalize" for = "heard-about-us">How Did You Hear About Us?</label>
                  <select name = "heard-about-us">
                    <option value = "Select An Option">Select An Option</option>
                    <option value = {this.state.friend}>Friend / Family</option>
                    <option value = {this.state.socialMedia}>Social Media</option>
                    <option value = {this.state.advertisement}>Advertisements</option>
                    <option value = {this.state.other}>Other</option>                  
                  </select>
                </div>

                {/* Thoughts || Prayer Requests */}
                <div className = "cta-message">
                  <label className = "cta-message-label cta-capitalize" for = "message">Want to leave us a prayer request or message?</label>
                  <textarea 
                    className = "message-area"
                    rows = "5"
                    cols = "10"
                    name = "message"
                    value = {this.state.message}
                    onChange = {this.handleInputChange}
                  />
                </div> 
                
                <p className = "small-msg">* Upon submission, you will be redirected to Formspree's email service to confirm you aren't a robot</p>
                <button className = "submit-btn" type = "submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
  
      </div>
    );
  }  
}
 
export default FirstTime;