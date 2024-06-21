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
import Footer from "./components/Footer";
import { skillShellData } from "../components/Data";

export default function SkillShellPage() {
  const matches = useMediaQuery("(min-width:769px)");

  const mini = useMediaQuery("(max-width:769px");

  const [selectedButton, setSelectedButton] = useState("");
  const newComponentRef = useRef(null);

  /* useRef does not re-render the page, it is used to reference a Grid node
      in the component to notify useEffect to execute*/

  useEffect(() => {
    if (selectedButton && newComponentRef.current) {
      newComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedButton]);

  /* The dependency array is selectedButton and when selectedButton
  and newComponentRef.current (current value of useRef) are selected then the scrollIntoView
  behaviour executes*/

  console.log("newref", useEffect);

  const handleButtonClick = (skill) => {
    setSelectedButton(skill);
    console.log("skillshelldropdown", handleButtonClick);
  };

  const handleSkillSelect = (skill) => {
    setSelectedButton(skill.skill);
  };

  return (
    <Grid className="blueBody">
      <Grid sx={{ paddingBottom: "20px" }} className="whiteLandingContainer">
        <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
          Learn from Experience
        </h2>
        <Grid className= "topGrid">
          {mini ? null : (<Grid className="imgContainer">
          <img className="img" src={Discover} alt="Discover" />
          <img className="img" src={Skill} alt="Skill" />
          <img className="img" src={Community} alt="Community" />
          <img className="img" src={Superhero} alt="Superhero" />
        </Grid>
        )}
        {matches ? null : (<Grid className="imgContainerSm">
          <img className="img" src={Discover} alt="Discover" />
          <img className="img" src={Skill} alt="Skill" />
          <img className="img" src={Community} alt="Community" />
          <img className="img" src={Superhero} alt="Superhero" />
        </Grid>
        )}
        </Grid>
      </Grid>
      <Grid sx={{ padding: "60px 20px 20px 20px" }}>
        
          <Grid className="dropDownContainer">
            <SkillShellDropDown onChange={handleSkillSelect} />
          </Grid>
        {matches && (
          <Grid className="SkillContainer">
            {skillShellData.map((skill, index) => (
              <SkillButton
                key={index}
                skill={skill.skill}
                onClick={() => handleButtonClick(skill.skill)}
              />
            ))}
          </Grid>
        )}
        ;
      </Grid>
      <Grid sx={{ paddingBottom: "40px" }} ref={newComponentRef}>
        {selectedButton && (
          <BlankSkillCard skillname={{ skillname: selectedButton }} />
        )}
      </Grid>
      <Footer />
    </Grid>
  );
}
