import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
<<<<<<< HEAD
import Signup from './components/Pages/Signup/Signup';
import Signin from './components/Pages/Login/Login';
import oAuth from "./utils/"

class App extends React.Component {
  state= {
    oAuth:false
  }
  handleSignup = (data) =>{
    oAuth.signup(data).then((res)=>{
      window.localStorage.setItem("token", res.data.token)
      this.setState({oAuth:true})
    }).catch(function(error) {
      console.log(error);
    });
  }
  handleSignin = (data) =>{
    oAuth.signin(data).then((res)=>{
      window.localStorage.setItem("token",res.data.toke)
      this.setState({oAuth:true})
    }).catch(function(error) {
      alert("Wrong email or password! sucker!")
    });
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/signup" render={(props) => <Signup {...this.state} {...props} oAuthSignup={this.handleSignup}/>} />
        <Route exact path="/login" render={(props) => <Signin {...this.state} {...props} oAuthSignin={this.handleSignin}/>} />
      </Router>
    )
  }
=======
import Signup from "./components/Pages/Signup/Signup";
import Login from './components/Pages/Login/Login';
import EarthquakesContainer from './components/Services/EarthquakesContainer';
import Resources from "./components/Pages/Resources2/Resources2";
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
>>>>>>> 9aa444ec0cfa7b4c8dca0471b5538f5fee32944d
}

export default App;


