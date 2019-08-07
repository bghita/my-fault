import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Signup from "./components/Pages/Signup/Signup";
import Login from './components/Pages/Login/Login';
import EarthquakesContainer from './components/Services/EarthquakesContainer';
import Resources from "./components/Pages/Resources/Resources";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
        <Navbar/>
        <Route exact path="/" component={EarthquakesContainer}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/resources" component={Resources}/>
        <Footer/>
    </Router>
  );
}

export default App;
