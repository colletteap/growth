import React from "react";
import Emailimg from "../assets/Emailimg.png";
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
    </Grid>
  );
}
export default Footer;
