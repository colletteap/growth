import React, { useState } from 'react';
import { Grid } from '@mui/joy';
import "../styles/Profile.css";
import Avatar from "../assets/avatarplaceholder.png";
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { name } = location.state || {}; 

  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    title: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };


  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:4001/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: profileData.title,
          bio: profileData.bio,
         // add other fields here as added
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); 
        toggleEdit(); // Switch back to view mode after saving
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Grid className="ProfileContainer">
      <h2>Profile</h2>
      <img className="avatarContainer" src={Avatar} alt="picture placeholder" />
      <Grid>
        <h3>Welcome, {name}!</h3>
      </Grid>

      {isEditing ? (
        <>
          <Grid>
            <h3>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={profileData.title}
                onChange={handleChange}
              />
            </h3>
          </Grid>
          <Grid>
            <input
              type="text"
              placeholder="Tell a little about yourself"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
            />
          </Grid>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <Grid>
            <h3>{profileData.title || 'Your Title'}</h3>
          </Grid>
          <Grid>
            <p>{profileData.bio || 'A little about yourself'}</p>
          </Grid>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}

      <Grid>
        <p>Teaching Experience |</p>
        <p>Education / Certificates |</p>
        <p>Resources Shared |</p>
        <p>Badges |</p>
        <p>Skills |</p>
        <p>Contact Info |</p>
        <p>Favorite Resources / Books</p>
      </Grid>
    </Grid>
  );
}

export default Profile