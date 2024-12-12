import React, { useState, useEffect } from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import { Grid } from "@mui/joy";
import getBaseUrl from "../utils/getBaseUrl";

const BlogLanding = () => {
    const [blogLanding, setBlogLanding] = useState([]);
  
    useEffect(() => {
      const fetchBlogLanding = async () => {
        try {
          const response = await fetch(`${getBaseUrl()}/blogLanding`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setBlogLanding(data); 
            console.log('Fetched blogLanding:', data); 
          } else {
            const errorText = await response.text();
            console.error('Failed to fetch blogLanding data:', response.status, errorText);
          }
        } catch (error) {
          console.error('Error fetching blogLanding data:', error);
        }
      };
    
      fetchBlogLanding();
    }, []);

  return (
    <>
      <h1 className="whiteHeading">Tools from fellow teachers</h1>

      <Grid className="BlogContainer">
        {blogLanding.map((item, index) => (
          <Landingblogcard
            key={index}
            title={item.title}
            content={item.content}
            linkTo={item.linkTo}
            image={`${getBaseUrl()}${item.image}`}
          />
        ))}
      </Grid>
    </>
  );
};

export default BlogLanding;
