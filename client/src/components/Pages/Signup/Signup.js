import React from 'react';
import "./Signup.css";
import Box from './../../Box/Box';
import { Carousel } from 'react-bootstrap';
import SignupBox from '../../SignupBox/SignupBox';


const Signup = () => {
    return (
        <div className="background">
            <Carousel></Carousel>
            <SignupBox></SignupBox>
            <Box/>
        </div>
    )
}

export default Signup;