import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Signup from "./components/Pages/Signup/Signup";
import Signin from './components/Pages/Login/Login';
import EarthquakesContainer from './components/Services/EarthquakesContainer';
import Resources2 from "./components/Pages/Resources2/Resources2";
import Resources from "./components/Pages/Resources/Resources";
import Footer from "./components/Footer/Footer";
import oAuth from "./utils/";
import Info from "./components/Pages/Info/Info";

class App extends React.Component {
  state = {
    oAuth: false
  }
  handleSignup = (data) => {
    console.log(data)
    oAuth.signup(data).then((res) => {
      window.localStorage.setItem("token", res.data.token)
      this.setState({ oAuth: true })
    }).catch(function (error) {
      console.log(error);
    });
  }
  handleSignin = (data) => {
    oAuth.signin(data).then((res) => {
      window.localStorage.setItem("token", res.data.toke)
      this.setState({ oAuth: true });
    }).catch(function (error) {
    });
  }
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Info} />
        <Route exact path="/signup" render={(props) => <Signup {...this.state} {...props} oAuthSignup={this.handleSignup} />} />
        <Route exact path="/login" render={(props) => <Signin {...this.state} {...props} oAuthSignin={this.handleSignin} />} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/mobile" component={Resources2}/>
        <Route exact path="/home" component={EarthquakesContainer} />
        <Footer />
      </Router>
    )
  }
}

export default App;
