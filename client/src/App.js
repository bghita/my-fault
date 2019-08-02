import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Signup from './components/Pages/Signup/Signup';
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
