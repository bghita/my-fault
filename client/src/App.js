import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Box from './components/Box/Box';
import Home from './components/Pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
        <Route path="/" component={Navbar}/>
        <Route exact path="/home" component={Home}/>
        
          
    </Router>
  );
}

export default App;
