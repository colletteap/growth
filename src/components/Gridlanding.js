import React from "react";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";
import LargeLogo from "../assets/GrowthBlueHQ.png";
import LogoText from "../assets/TopGridText.png";
import GrowthSM from "../assets/GrowthSM.svg";
import smallTop from "../assets/smallTop.svg";
import "../styles/Gridlanding.css";
import SkillLanding from "./Skilllanding";
import AdviceLanding from "./Advicelanding";
import BlogLanding from "./Bloglanding";
import useMediaQuery from "@mui/material/useMediaQuery";

const GridLanding = () => {
  const matches = useMediaQuery("(max-width:769px)");
  const min = useMediaQuery("(min-width:769px)");

  return (
    <>
      <Grid className="GridContainer">
        <Grid className="ImageContainer">
          {matches ? null : (<img src={LargeLogo} alt="Growth Logo" />)}
          {min ? null : (
            <img src={GrowthSM} style={{ paddingTop: "30px" }} alt="Growth" />
          )}
        </Grid>
        <Grid className="ImageContainerText">
          {matches ? null : (<img src={LogoText} alt="LogoText" />)}
           {min ? null : (<img src={smallTop} alt="Logo Explanation" />)}
        </Grid>
      </Grid>
      <Grid
        sx={{ padding: "0 20px 20px 20px" }}
        className="blueLandingContainer"
      >
        <SkillLanding />
      </Grid>
      <Grid className="adviceLandingContainer">
        <Link to="/Advice" className="textDeco">
          <AdviceLanding />
        </Link>
      </Grid>
      <Grid className="blueLandingContainer">
        <BlogLanding />
      </Grid>
    </>
  );
};

export default GridLanding;
