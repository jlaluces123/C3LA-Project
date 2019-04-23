import React from 'react';
import "./Navigation.css";
// import c3la from "../../assets/c3la-logo-black.png";

/* Dependencies */
import { NavLink, Route } from "react-router-dom";


/* Components */
import About from "../About/About.js";
import Locations from "../Locations/Locations.js"
import Sermons from "../Sermons/Sermons.js"
import Home from "../Home/Home.js"
import FirstTime from "../FirstTime/FirstTime.js";
import NextSteps from "../NextSteps/NextSteps.js"
import Ministries from "../Ministries/Ministries.js"
import Give from "../Give/Give.js"


// const aboutNav = {
//   title: "About",
//   nodes: [
//     {
//       title: "Our Vision",
//       link: "/vision"
//     },
//     {
//       title: "Our Pastors",
//       link: "/our-pastors"
//     },
//   ]
// };

class Navigation extends React.Component {
  state = {
    open: true,
  };

  handleMenu = event => {
    this.setState({ open: !this.state.open });
  }
  
  render() { 
    return (
      <div className = "navigation-component-wrapper">
        <ul className = "main-nav-wrapper">
          <NavLink to = "/vision" className = "nav-link">About</NavLink>
          <NavLink to = "/locations" className = "nav-link">Locations</NavLink>
          <NavLink to = "/sermons" className = "nav-link">Sermons</NavLink>
          <NavLink exact to = "/" className = "nav-link">Home</NavLink>
          <NavLink exact to = "/first-time" className = "nav-link">First Time</NavLink>
          <NavLink to = "/next-steps" className = "nav-link">Next Steps</NavLink>
          <NavLink to = "/ministries" className = "nav-link">Ministries</NavLink>
          <NavLink to = "/give" className = "nav-link">Give</NavLink>
        </ul>
        <Route exact path = "/vision" component = {About} />
        <Route exact path = "/locations" component = {Locations} />
        <Route exact path = "/sermons" component = {Sermons} />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/first-time" component = {FirstTime} />
        <Route exact path = "/next-steps" component = {NextSteps} />
        <Route exact path = "/ministries" component = {Ministries} />
        <Route exact path = "/give" component = {Give} />
      </div>
    );
  }
}
 
export default Navigation;