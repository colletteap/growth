import React from "react";
import "../styles/Gridlanding.css";
import AuthButtons from "./AuthButtons";
import SignUpImg from "../assets/SignUpImg.png";

const SignUpBox = () => {
return (
    <div className="centerContainerSU"  >
    <div>
      <img src={SignUpImg} alt="sign up img" sx={{width: '70%', height: '70%'}}/>
    </div>
    <div>
      <AuthButtons />
    </div>
  </div>
)
};

export default SignUpBox;