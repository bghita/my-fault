import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
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
}

export default App;


