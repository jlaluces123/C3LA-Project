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
          <h1 style = {{ fontSize: "2.5rem", marginBottom: 50 }}>Help Us Get To Know You</h1>        
          <div className = "card-wrapper">
            {/* Left Side Of Card */}
            <div className = "left-side-logo separate">
              <img src = {c3Logo} alt = "C3 LOS ANGELES LOGO BLACK" />
            </div>
            {/* Right Side of Card */}
            <div className = "right-side-logo separate">
              <form>

                {/* First Name Input */}                
                <label for = "firstName">First Name</label>
                <input
                  id = "firstName"
                  type = "text"                           
                  name = "firstName"
                  value = {this.state.firstName}
                  onChange = {this.handleInputChange}
                  placeholder = "John"
                />

                {/* Last Name Input */}
                <label for = "lastName">Last Name</label>
                <input
                  id = "lastName"
                  type = "text"                           
                  name = "lastName"
                  value = {this.state.lastName}
                  onChange = {this.handleInputChange}
                  placeholder = "Smith"
                />

                {/* Email Input */}
                <label for = "email">Email Address</label>
                <input
                  id = "email"
                  type = "text"                           
                  name = "email"
                  value = {this.state.email}
                  onChange = {this.handleInputChange}
                  placeholder = "johnsmith@email.com"
                />

                {/* How Did You Hear About Us ? */}
                <label for = "hear">How Did You Hear About Us?</label>
                <select name = "options">
                  <option value = "Select An Option">Select An Option</option>
                  <option value = {this.state.friend}>Friend / Family</option>
                  <option value = {this.state.socialMedia}>Social Media</option>
                  <option value = {this.state.advertisement}>Advertisements</option>
                  <option value = {this.state.other}>Other</option>                  
                </select>

                {/* Thoughts || Prayer Requests */}
                <label for = "message">Want to leave us a prayer request or message?</label>
                <textarea 
                  className = "message-area"
                  rows = "5"
                  cols = "10"
                  name = "message"
                  value = {this.state.message}
                  onChange = {this.handleInputChange}
                />

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