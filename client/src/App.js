import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.js";
/* Components */
import About from "./components/About/About.js";
import Locations from "./components/Locations/Locations.js"
import Sermons from "./components/Sermons/Sermons.js"
import Home from "./components/Home/Home.js"
import FirstTime from "./components/FirstTime/FirstTime.js";
import NextSteps from "./components/NextSteps/NextSteps.js"
import Ministries from "./components/Ministries/Ministries.js"
import Give from "./components/Give/Give.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

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

export default App;
