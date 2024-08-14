import React from "react";
import Grid from "@mui/joy/Grid";
import AuthButtons from "./AuthButtons";
import SignUpImg from "../assets/SignUpImg.png";

const SignUpBox = () => {
return (
    <Grid
    container
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyItems: 'center',
      alignItems: 'center',
      minWidth: '100px',
      maxWidth: '300px',
      textAlign: 'center',
      backgroundColor: 'lightblue',
borderRadius: '10px',
    }}
  >
    <Grid item>
      <img src={SignUpImg} alt="sign up img" sx={{width: '50%', height: '50%'}}/>
    </Grid>
    <Grid item>
      <AuthButtons />
    </Grid>
  </Grid>
)
};

export default SignUpBox;