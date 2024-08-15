import { Grid } from '@mui/joy';
import React from 'react';
import "../styles/Profile.css";
import Avatar from "../assets/avatarplaceholder.png";
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { name } = location.state || {}; 

  return (
    <>
    <Grid className="ProfileContainer">
      <h2>Profile</h2>
      <img className="avatarContainer" src={Avatar} alt="picture placeholder"/>
      <Grid>
      <h3>Welcome, {name}!</h3>
        </Grid>
      <Grid>
        <h3>
        <input
              type="text"
              placeholder="Enter Title"
              name="title" 
            />
        </h3>
      </Grid>
      <Grid>
      <input
              type="text"
              placeholder="Tell a little about yourself"
              name="bio" 
            />
      </Grid>
      Teaching Experience |
      Education / Certificates |
      Resources Shared: |
      Badges |
      Skills |
      Contact Info |
      Favorite Resources / Books 
    </Grid>
    </>
    
  )
}

export default Profile