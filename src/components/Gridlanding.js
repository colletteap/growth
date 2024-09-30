import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import LogoText from "../assets/NewInfo.png";
import smallTop from "../assets/smallTop.svg";
import "../styles/Gridlanding.css";
import SkillLanding from "./Skilllanding";
import AdviceLanding from "./Advicelanding";
import BlogLanding from "./Bloglanding";
import HomepageFooter from "../components/HomepageFooter";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUpBox from "./SignUpBox";

const GridLanding = () => {
  const matches = useMediaQuery("(max-width:769px)");
  const min = useMediaQuery("(min-width:769px)");

  return (
    <>
      <Grid className="GridContainer">
        <Grid item className="ImageContainer">
          <SignUpBox/>
        </Grid>
        <Grid item className="ImageContainerText">
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
        <HomepageFooter />
      </Grid>
    </>
  );
};

export default GridLanding;
