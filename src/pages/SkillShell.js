import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/joy/Grid";
import "../styles/SkillShell.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Skill from "../assets/skill.png";
import Superhero from "../assets/superhero.png";
import Discover from "../assets/discover.png";
import Community from "../assets/community.png";
import SkillButton from "../components/Skillbutton";
import BlankSkillCard from "../components/Blankskillcard";
import SkillShellDropDown from "../components/SkillShellDropDown";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import getBaseUrl from "../utils/getBaseUrl";

export default function SkillShellPage() {
  const matches = useMediaQuery("(min-width:769px)");
  const mini = useMediaQuery("(max-width:769px)");

  const [selectedButton, setSelectedButton] = useState("");
  const newComponentRef = useRef(null);

  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [postContent, setPostContent] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);  
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userId'); 
    const token = localStorage.getItem('accessToken');  
    if (loggedInUser) {
      setUserId(loggedInUser);
    }
    if (token) {
      setAccessToken(token);  
    }
    console.log(token);
  }, []);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/skillSearch`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSkills(data);
          console.log('Fetched skills:', data);
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch skills data:', response.status, errorText);
        }
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    getSkills();
  }, []);

  useEffect(() => {
    if (selectedButton && newComponentRef.current) {
      newComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedButton]);

  const handleButtonClick = (skill) => {
    setSelectedButton(skill);
  };

  const handleSkillSelect = (skill) => {
    setSelectedButton(skill.skill);
  };

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    if (!selectedSkill || !postContent || !userId) {
      setMessage('Please select a skill, enter a post, and make sure you are logged in.');
      return;
    }

    try {
      const response = await fetch(`${getBaseUrl()}/addSkillPost`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          skill: selectedSkill,
          details: postContent,
          userId: userId,
        }),
      });

      if (response.ok) {
        setMessage('Post added successfully!');
        setPostContent('');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('An error occurred while submitting the post.');
    }
  };

  return (
    <Grid className="blueBody">
      <Grid sx={{ paddingBottom: "20px" }} className="whiteLandingContainer">
        <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
          Learn from Experience
        </h2>
        <Grid className="topGrid">
          {!mini && (
            <Grid className="imgContainer">
              <img className="img" src={Discover} alt="Discover" />
              <img className="img" src={Skill} alt="Skill" />
              <img className="img" src={Community} alt="Community" />
              <img className="img" src={Superhero} alt="Superhero" />
            </Grid>
          )}
          {mini && (
            <Grid className="imgContainerSm">
              <img className="img" src={Discover} alt="Discover" />
              <img className="img" src={Skill} alt="Skill" />
              <img className="img" src={Community} alt="Community" />
              <img className="img" src={Superhero} alt="Superhero" />
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid className="dropDownContainer" sx={{ padding: "20px 20px 20px 20px" }}>
        <Grid sx={{ display: "flex", flexDirection: "row"}}>
          <Grid className="topGrid column">
          <h5>Search for a Skill </h5>
            <SkillShellDropDown onChange={handleSkillSelect} />
          </Grid>
 {/* Only show post section if user is logged in */}
 {userId && (
         <Grid className="topGrid column" sx={{ padding: "40px 20px" }}>
           <h5>Share a Skill</h5>
           <SkillShellDropDown onChange={(skill) => setSelectedSkill(skill.skill)} />
            {selectedSkill && (
              <form onSubmit={handlePostSubmit}>
               <textarea
                  value={postContent}
                  onChange={handlePostChange}
                  placeholder={`Write your post for ${selectedSkill}...`}
                  style={{ width: '100%', height: '100px', marginTop: '10px', borderRadius: '10px' }}
                />
                <Button className="postButton" type="submit">Post</Button>
              </form>
            )}
            {message && <p>{message}</p>}
          </Grid>
      )}
        </Grid>

      {!userId && (
        <Grid>
          <p>You must be logged in to post a skill.</p>
        </Grid>
      )}
        {matches && (
          <Grid className="SkillContainer">
            {skills.map((skill, index) => (
              <SkillButton
                key={index}
                skill={skill.skill}
                onClick={() => handleButtonClick(skill.skill)}
              />
            ))}
          </Grid>
        )}
      </Grid>

      <Grid sx={{ paddingBottom: "40px" }} ref={newComponentRef}>
        {selectedButton && <BlankSkillCard skillname={{ skillname: selectedButton }} />}
      </Grid>

      <Footer />
    </Grid>
  );
}
