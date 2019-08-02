import React from 'react';
import "./Signup.css";
import Image from "./../../Carousel/Carousel";
import SignupBox from '../../SignupBox/SignupBox';


const Signup = () => {
    return (
        <div className="background">
            <Image/>
            <SignupBox></SignupBox>
        </div>
    )
}

export default Signup;