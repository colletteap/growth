import React from "react";
import "../styles/Gridlanding.css";
import AuthButtons from "./AuthButtons";
import SignUpImg from "../assets/SignUpImg.png";

const SignUpBox = () => {
return (
    <div className="centerContainerSU"  >
    <div  style={{ width: "120%", height: "120%" }}>
      <img 
      src={SignUpImg} 
      alt="sign up img" 
      />
    </div>
    <div style={{ padding: "60px 0 0 0" }}>
      <AuthButtons />
    </div>
  </div>
)
};

export default SignUpBox;