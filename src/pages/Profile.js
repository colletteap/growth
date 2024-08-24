import React, { useState } from 'react';
import { Grid } from '@mui/joy';
import "../styles/Profile.css";
import Avatar from "../assets/avatarplaceholder.png";

function Profile({ data }) {

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

const updateUserProfile = async () => {
  const updatedUser = {
    ...data,
    title: profileData.title,
    bio: profileData.bio,
  };
  const userId = data.userId;

  await fetch(`http://localhost:4001/updateUser/${userId}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({ updatedUser }),
  });
};
const handleSave = async () => {
  try {
    await updateUserProfile(); 
    alert("Profile updated successfully!");
    toggleEdit();  // Switch back to view mode after saving
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
};


  return (
    <Grid className="ProfileContainer">
      <h2>Profile</h2>
      <img className="avatarContainer" src={Avatar} alt="picture placeholder" />
      <Grid>
        <h3>Welcome, {data?.firstName || 'Guest'}!</h3>
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
          <button className="profileButtons" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <Grid>
            <h3>{profileData.title || 'Your Title'}</h3>
          </Grid>
          <Grid>
            <p>{profileData.bio || 'A little about yourself'}</p>
          </Grid>
          <button className="profileButtons" onClick={toggleEdit}>Edit</button>
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