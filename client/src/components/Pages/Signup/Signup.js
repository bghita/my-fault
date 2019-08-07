import React from 'react';
import "./Signup.css";
import Image from "./../../Carousel/Carousel";
import SignupBox from '../../SignupBox/SignupBox';


const Signup = (props) => {
    return (
        <div className="background">
            <Image/>
            <SignupBox oAuthSignup={props.oAuthSignup}/>
        </div>
    )
}

export default Signup;