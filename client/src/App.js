import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Signup from './components/Pages/Signup/Signup';
import Login from './components/Pages/Login/Login';
import EarthquakesContainer from './components/Services/EarthquakesContainer';
import Resources from "./components/Pages/Resources/Resources";

function App() {
  return (
    <Router>
        <Route path="/" component={Navbar}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/resources" component={Resources}/>
        <EarthquakesContainer/>
    </Router>
  );
}

export default App;
