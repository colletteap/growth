import React, { useState, useEffect } from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import { Grid } from "@mui/joy";

const BlogLanding = () => {
    const [blogLanding, setBlogLanding] = useState([]);
  
    useEffect(() => {
      const fetchBlogLanding = async () => {
        try {
          const response = await fetch(`http://localhost:3001/blogLanding`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setBlogLanding(data); 
            console.log('Fetched blogLanding:', data); // Log the fetched data
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
            image={item.image}
          />
        ))}
      </Grid>
    </>
  );
};

export default BlogLanding;
