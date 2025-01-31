import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import getBaseUrl from "../utils/getBaseUrl";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    profilePicture: "",
    firstName: "",
    title: "",
    skillsShared: 0,
    questionsAsked: 0,
    questionsAnswered: 0,
    bio: "",
    yearsExperience: "",
    education: "",
    contactInfo: "",
    favBooks: "",
  });

  // Fetch and populate profile data
  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Get userId from localStorage

    if (userId) {
      const fetchProfileData = async () => {
        const accessToken = localStorage.getItem("accessToken"); // Get accessToken from localStorage

        try {
          const response = await fetch(`${getBaseUrl()}/profile`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Fetched data:", data);

            // Populate the state with user data
            setProfileData({
              profilePicture: `${data.profilePicture}?timestamp=${Date.now()}` || "",
              firstName: data.firstName || "",
              title: data.title || "",
              skillsShared: data.skillsShared || 0,
              questionsAsked: data.questionsAsked || 0,
              questionsAnswered: data.questionsAnswered || 0,
              bio: data.bio || "",
              yearsExperience: data.yearsExperience || "",
              education: data.education || "",
              contactInfo: data.contactInfo || "",
              favBooks: data.favBooks || "",
            });
            console.log("Profile Picture Path:", profileData.profilePicture);
          } else {
            console.error("Failed to fetch profile data");
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };

      fetchProfileData();
      // Fetch profile data if userId is available
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({
        ...profileData,
        profilePicture: file,
      });
      console.log("Profile Picture Path:", file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    const accessToken = localStorage.getItem("accessToken"); // Get accessToken from localStorage

    const formData = new FormData();
    formData.append("title", profileData.title);
    formData.append("bio", profileData.bio);
    formData.append("yearsExperience", profileData.yearsExperience);
    formData.append("education", profileData.education);
    formData.append("contactInfo", profileData.contactInfo);
    formData.append("favBooks", profileData.favBooks);
    if (profileData.profilePicture instanceof File) {
      formData.append("profilePicture", profileData.profilePicture);
    }
    console.log("Form Data Before Save:", formData);

    try {
      const response = await fetch(`${getBaseUrl()}/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        const updatedData = await response.json();
        console.log("Profile updated successfully");
        setProfileData((prev) => ({
          ...prev,
          profilePicture: `${updatedData.profilePicture}?timestamp=${Date.now()}`, // Add timestamp to force reload
        }));
        toggleEdit();
        alert("Profile updated successfully!");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  console.log(profileData.profilePicture);
  return (
    <div className="ProfileContainer">
      {/* First Column */}
      <div className="gridItem">
        <div className="fullW">
          <div className="spaced">
            <h2>Profile</h2>
            <img
              className="avatarContainer"
                src={
                  profileData.profilePicture 
                  || `${getBaseUrl()}/images/avatarplaceholder.png`}
                alt="profile"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ margin: "10px 0" }}
              />
            )}
          </div>
          {isEditing ? (
            <div className="spaced">
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={profileData.title}
                onChange={handleChange}
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  border: "none",
                  backgroundColor: "blanchedalmond",
                }}
              />
            </div>
          ) : (
            <div className="spaced">
              <h3>{profileData.title || "Visiting Teacher"}</h3>
              <p>
                <strong>Skills Shared:</strong> {profileData.skillsShared}
              </p>
              <p>
                <strong>Questions Asked:</strong> {profileData.questionsAsked}
              </p>
              <p>
                <strong>Questions Answered:</strong>{" "}
                {profileData.questionsAnswered}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Second Column */}
      <div className="gridItem">
        <div className="editFields">
          {isEditing ? (
            <div className="fullW">
              <div className="spaced">
                <input
                  type="text"
                  placeholder="Tell a little about yourself"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    backgroundColor: "blanchedalmond",
                  }}
                />
              </div>
              <div className="spaced">
                <input
                  type="text"
                  placeholder="How many years of teaching experience do you have?"
                  name="yearsExperience"
                  value={profileData.yearsExperience}
                  onChange={handleChange}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    backgroundColor: "blanchedalmond",
                  }}
                />
              </div>
              <div className="spaced">
                <input
                  type="text"
                  placeholder="Your education &/or certificates"
                  name="education"
                  value={profileData.education}
                  onChange={handleChange}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    backgroundColor: "blanchedalmond",
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="fullW">
              <div className="spaced">
                <h3>Bio</h3>
                <p>{profileData.bio || "A little about yourself"}</p>
              </div>
              <div className="spaced">
                <h3>Years of Experience</h3>
                <p>
                  {profileData.yearsExperience ||
                    "Years of teaching experience"}
                </p>
              </div>
              <div className="spaced">
                <h3>Education</h3>
                <p>
                  {profileData.education ||
                    "Your education and/or certificates"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Third Column */}
      <div className="gridItem">
        <div className="editFields">
          {isEditing ? (
            <div className="fullW">
              <div className="spaced">
                <input
                  type="text"
                  placeholder="Your contact information"
                  name="contactInfo"
                  value={profileData.contactInfo}
                  onChange={handleChange}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    backgroundColor: "blanchedalmond",
                  }}
                />
              </div>
              <div className="spaced">
                <input
                  type="text"
                  placeholder="Your favorite resources or books"
                  name="favBooks"
                  value={profileData.favBooks}
                  onChange={handleChange}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    backgroundColor: "blanchedalmond",
                  }}
                />
                <button className="profileButtons" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="fullW">
              <div className="spaced">
                <h3>Contact</h3>
                <p>{profileData.contactInfo || "Your contact information"}</p>
              </div>
              <div className="spaced">
                <h3>Favorite Books</h3>
                <p>
                  {profileData.favBooks || "Your favorite resources or books"}
                </p>
              </div>
              <button className="profileButtons" onClick={toggleEdit}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Profile;
