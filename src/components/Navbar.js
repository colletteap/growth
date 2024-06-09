import React, { useState } from "react";
import { Grid } from "@mui/material";
import Logo from "../assets/navbarlogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import SoundToggleButton from "../soundReact/GlobalButton";

function Navbar() {
  const matches = useMediaQuery("(min-width:767px)");
  console.log("matches", matches);
  const mini = useMediaQuery("(max-width:767px)");

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    if (mini) {
      setOpenLinks(!openLinks);
    }
  };

  return (
    <Grid className="navbar">
      {mini ? null : (
        <Grid className="logoNav">
          <Link to="./">
            <img src={Logo} alt="logo" />
          </Link>
        </Grid>
      )}
      {matches ? null : (
        <Grid className="leftSide" id={openLinks ? "open" : "close"}>
          <Grid className="hiddenLinks">
            <Link to="./"> Home </Link>
            <Link to="./SkillShell"> Learn </Link>
            <Link to="./Advice"> Ask </Link>
            <Link to="./Blog"> Tools </Link>
          </Grid>
        </Grid>
      )}
      {mini ? null : (
        <Grid className="rightSide">
          <SoundToggleButton />
          <Link to="./"> Home </Link>
          <Link to="./SkillShell"> Learn </Link>
          <Link to="./Advice"> Ask </Link>
          <Link to="./Blog"> Tools </Link>
        </Grid>
      )}
      {matches ? null : (
        <button sx={{ color: "#233349" }} onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      )}
    </Grid>
  );
}

export default Navbar;
