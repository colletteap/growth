import React from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import { blogData } from "./Data.js";
import { Grid } from "@mui/joy";

const BlogLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Tools from fellow teachers</h1>

      <Grid className="BlogContainer">
        {blogData.map((item, index) => (
          <Landingblogcard
            key={index}
            title={item.title}
            content={item.content}
            linkTo={item.linkTo}
            image={item.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default BlogLanding;
