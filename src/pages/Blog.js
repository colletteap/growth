import React, { useState, useEffect } from "react";
import Grid from "@mui/joy/Grid";
import Blogcard from "../components/Blogcard";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import Footer from "../components/Footer";
import CustomButton from "../soundReact/customButton";
import getBaseUrl from "../utils/getBaseUrl";

function Blog() {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [blogPageData, setBlogPageData] = useState([]);
  const [urls, setUrls] = useState([]);

  // Fetch blog page data and URLs from the backend
  useEffect(() => {
    const fetchBlogPageData = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogPageData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBlogPageData(data);
        } else {
          console.error('Failed to fetch blog page data');
        }
      } catch (error) {
        console.error('Error fetching blog page data:', error);
      }
    };

    const fetchUrls = async () => {
      try {
        const response = await fetch('http://localhost:3001/urls', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUrls(data.map((urlItem) => urlItem.url));
        } else {
          console.error('Failed to fetch URLs');
        }
      } catch (error) {
        console.error('Error fetching URLs:', error);
      }
    };

    fetchBlogPageData();
    fetchUrls();
  }, []);

  const handleClick = () => {
    const nextUrlIndex = (currentUrlIndex + 1) % urls.length;
    setCurrentUrlIndex(nextUrlIndex);
    window.open(urls[nextUrlIndex], "_blank");
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Grid>
      <Grid className="CenterContainer">
        <h2 style={{ textAlign: "center" }}>Teacher's Toolkit</h2>
        <SearchBar onChange={handleSearchChange} />
      </Grid>
      <Grid className="CenterContainer">
        <CustomButton
          className="resourceButton"
          onClick={handleClick}
          variant={Blog}
        >
          Resource of the Day!
        </CustomButton>
      </Grid>
      <Grid sx={{ padding: "20px" }} className="BlogPageContainer">
        {blogPageData
          .filter((type) =>
            type.content.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((type, index) => (
            <Blogcard
              key={index}
              title={type.title}
              content={type.content}
              linkTo={type.linkTo}
              image={`http://localhost:3001${type.image}`} 
            />
          ))}
      </Grid>
      <Footer />
    </Grid>
  );
}

export default Blog;
