import { Grid } from '@mui/joy';
import React from 'react';
import "../styles/Profile.css";
import Avatar from "../assets/avatarplaceholder.png";

function Profile() {
  return (
    <>
    <Grid className="ProfileContainer">
      <h2>Profile</h2>
      <img className="avatarContainer" src={Avatar} alt="picture placeholder"/>
      Name
      Badges
      Bio
    </Grid>
    </>
    
  )
}

export default Profile