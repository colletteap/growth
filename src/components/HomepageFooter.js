import React from "react";
import Emailimg from "../assets/Emailimg.png";
import LinkedInImg from "../assets/LinkedInImg.png";
import YouTubeImg from "../assets/YouTubeImg.png";
import GitHubImg from "../assets/GitHubImg.png";
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
            style={{ padding: "5px", width: "60%" }}
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <Link to="/">
          <img src={Home} alt="Home" style={{ padding: "5px", width: "60%" }} />
        </Link>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://www.linkedin.com/in/collettegarland/" target="_blank" rel="noopener noreferrer">
          <img
            src={LinkedInImg}
            alt="LinkedIn"
            style={{ padding: "5px", width: "60%" }}
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://www.youtube.com/@collette2835" target="_blank" rel="noopener noreferrer">
          <img
            src={YouTubeImg}
            alt="YouTube"
            style={{ padding: "5px", width: "60%" }}
          />
        </a>
      </Grid>
      <Grid sx={{ width: "80px" }}>
        <a href="https://github.com/colletteap" target="_blank" rel="noopener noreferrer">
          <img
            src={GitHubImg}
            alt="GitHub"
            style={{ padding: "5px", width: "60%" }}
          />
        </a>
      </Grid>
    </Grid>
  );
}
export default Footer;
