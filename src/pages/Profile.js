import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/joy';
import "../styles/Profile.css";
import Avatar from "../assets/avatarplaceholder.png";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    title: '',
    bio: '',
    yearsExperience: '',
    education: '',
    contactInfo: '',
    favBooks: '',
  });

  // Fetch and populate profile data
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Get userId from localStorage

    if (userId) {
      const fetchProfileData = async () => {
        const accessToken = localStorage.getItem('accessToken'); // Get accessToken from localStorage

        try {
          const response = await fetch(`http://localhost:4001/profile`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Fetched data:', data);

            // Populate the state with user data
            setProfileData({
              firstName: data.firstName || '',
              title: data.title || '',
              bio: data.bio || '',
              yearsExperience: data.yearsExperience || '',
              education: data.education || '',
              contactInfo: data.contactInfo || '',
              favBooks: data.favBooks || '',
            });
          } else {
            console.error('Failed to fetch profile data');
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };

      fetchProfileData();  // Fetch profile data if userId is available
    } else {
      console.error('User ID not found in localStorage');
    }
  }, []);

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
    const accessToken = localStorage.getItem('accessToken'); // Get accessToken from localStorage

    const updatedUser = {
      title: profileData.title,
      bio: profileData.bio,
      yearsExperience: profileData.yearsExperience,
      education: profileData.education,
      contactInfo: profileData.contactInfo,
      favBooks: profileData.favBooks,
    };

    try {
      const response = await fetch(`http://localhost:4001/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        toggleEdit();  // Switch back to view mode after saving
        alert("Profile updated successfully!");
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Grid className="ProfileContainer">
      <h2>Profile</h2>
      <img className="avatarContainer" src={Avatar} alt="picture placeholder" />
      <Grid>
        <h3>Welcome, {profileData.firstName || 'Guest'}!</h3>
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
            <h3> Bio</h3>
            <input
              type="text"
              placeholder="Tell a little about yourself"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <h3>Years of Experience</h3>
            <input
              type="text"
              placeholder="How many years of teaching experience do you have?"
              name="yearsExperience"
              value={profileData.yearsExperience}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <h3>Education</h3>
            <input
              type="text"
              placeholder="Your education &/or certificates"
              name="education"
              value={profileData.education}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <h3>Contact</h3>
            <input
              type="text"
              placeholder="Your contact information"
              name="contactInfo"
              value={profileData.contactInfo}
              onChange={handleChange}
            />
          </Grid>
          <Grid>
            <h3> Favorite Resources</h3>
            <input
              type="text"
              placeholder="Your favorite resources or books"
              name="favBooks"
              value={profileData.favBooks}
              onChange={handleChange}
            />
          </Grid>
          <button className="profileButtons" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <Grid>
            <h3>{profileData.title || 'Visiting Teacher'}</h3>
          </Grid>
          <Grid>
            <p>{profileData.bio || 'A little about yourself'}</p>
          </Grid>
          <Grid>
            <p>{profileData.yearsExperience || 'Years of teaching experience'}</p>
          </Grid>
          <Grid>
            <p>{profileData.education || 'Your education and/or certificates'}</p>
          </Grid>
          <Grid>
            <p>{profileData.contactInfo || 'Your contact information'}</p>
          </Grid>
          <Grid>
            <p>{profileData.favBooks || 'Your favorite resources or books'}</p>
          </Grid>
          <button className="profileButtons" onClick={toggleEdit}>Edit</button>
        </>
      )}
    </Grid>
  );
}

export default Profile;
