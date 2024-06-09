import React from "react";
import { Grid } from "@mui/material";
import SkillLandingDropDown from "./SkillLandingDropDown";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../styles/Skilllanding.css";
import SkillButton from "./Skillbutton";
import { skillData } from "./Data";

const SkillLanding = () => {
  const matches = useMediaQuery("(min-width:768px)");
  console.log("matches", matches);

  return (
    <>
      <h1 className="whiteHeading">Learn skills from fellow teachers</h1>
      <Grid>
        <Grid item xs={6} className="skillButton">
          <SkillLandingDropDown />
        </Grid>
        {matches && (
          <Grid className="SkillContainer">
            {skillData.map((skill, index) => (
              <SkillButton
                key={index}
                skill={skill.skill}
                linkTo={skill.linkTo}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SkillLanding;
