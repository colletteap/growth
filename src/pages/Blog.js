import React, { useState } from "react";
import Grid from "@mui/joy/Grid";
import Blogcard from "../components/Blogcard";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import { blogPageData, urls } from "../components/Data";
import Footer from "../components/Footer";
import CustomButton from "../soundReact/customButton";

function Blog() {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");

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
              image={type.image}
            />
          ))}
      </Grid>
      <Footer />
    </Grid>
  );
}

export default Blog;
