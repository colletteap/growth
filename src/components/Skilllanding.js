import React, { useState, useEffect } from "react";
import SkillLandingDropDown from "./SkillLandingDropDown";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";
import getBaseUrl from "../utils/getBaseUrl";

const SkillLanding = () => {
  const [skills, setSkills] = useState([]);
  const matches = useMediaQuery("(min-width:768px)");
  console.log("matches", matches);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/skills`, {
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


  return (
    <div>
    <h1 className="whiteHeading" style={{ fontSize: '36px' }}>Learn skills from fellow teachers</h1>

    <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
        <div className="skillButton">
          <SkillLandingDropDown />
        </div>
        {matches && (
          <div className="SkillContainer">
            {skills.map((skill, index) => (
              <SkillButton
                key={index}
                skill={skill.skill_name}
                linkTo={skill.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillLanding;
