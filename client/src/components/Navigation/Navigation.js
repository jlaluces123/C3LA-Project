import React from 'react';
import "./Navigation.css";
// import c3la from "../../assets/c3la-logo-black.png";

/* Dependencies */
import { NavLink } from "react-router-dom";


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
  
  render() { 
    return (
      <div className = "navigation-component-wrapper">
        <ul className = "main-nav-wrapper">
          <NavLink to = "/vision" className = "nav-link">About</NavLink>
          <NavLink to = "/locations" className = "nav-link">Locations</NavLink>          
          <NavLink exact to = "/" className = "nav-link">Home</NavLink>
          <NavLink exact to = "/first-time" className = "nav-link">First Time</NavLink>
          <NavLink to = "/next-steps" className = "nav-link">Next Steps</NavLink>
        </ul>        
      </div>
    );
  }
}
 
export default Navigation;