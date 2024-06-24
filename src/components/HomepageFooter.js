import React from "react";
import Emailimg from "../assets/Emailimg.png";
import LinkedInImg from "../assets/Linkedinimg.png";
import YouTubeImg from "../assets/Youtubeimg.png";
import GitHubImg from "../assets/Githubimg.png";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";
import Home from "../assets/Home.png";

function Footer() {
  return (
    <Grid className=" footer">
      <Grid sx={{ width: "80px" }}>
        <a href="mailto:garlandcollette@gmail.com">
          <img
            src={Emailimg}
            alt="Email"
            className="footer-img"
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <Link to="/">
          <img src={Home} alt="Home" className="footer-img" />
        </Link>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://www.linkedin.com/in/collettegarland/" target="_blank" rel="noopener noreferrer">
          <img
            src={LinkedInImg}
            alt="LinkedIn"
            className="footer-img"
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://www.youtube.com/@collette2835" target="_blank" rel="noopener noreferrer">
          <img
            src={YouTubeImg}
            alt="YouTube"
            className="footer-img"
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://github.com/colletteap" target="_blank" rel="noopener noreferrer">
          <img
            src={GitHubImg}
            alt="GitHub"
            className="footer-img"
          />
        </a>
      </Grid>
      <Grid>
        <p className="footer-text" >Made by Collette Lane</p>
      </Grid>
    </Grid>
  );
}
export default Footer;
