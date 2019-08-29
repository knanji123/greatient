import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from "./main.js";


function App() {
  return (
    <div className="App">

      <Router>
      {/* Route to home page - passes in podHistory and props */}
      <Route exact path="/" component = {MainPage}/>

      </Router>

    </div>
  );
}

export default App;
