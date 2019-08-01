import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Box from './components/Box/Box';
import Signup from './components/Pages/Signup/Signup';
import './App.css';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <Router>
        <Route path="/" component={Navbar}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
    </Router>
  );
}

export default App;
