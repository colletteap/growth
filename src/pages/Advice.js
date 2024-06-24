import React, { useState } from "react";
import "../styles/Advice.css";
import Grid from "@mui/joy/Grid";
import ActionButton from "../components/Actionbutton";
import ContentCard from "../components/Contentcard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";
import Magic from "../assets/MagicSeg.png";
import AdviceText from "../assets/AdviceTextHQ.png";
import Footer from "../components/Footer";
import { askAdviceCardData } from "../components/Data";

// Import statements

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(true);
  const [commentsArray, setCommentsArray] = useState(() => {
    const storedComments = localStorage.getItem("commentsArray");
    return storedComments ? JSON.parse(storedComments) : [];
  });
  const [searchInput, setSearchInput] = useState("");

  // State hooks, toggling visibility, defining commentsArray variable to come from local storage if any

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  console.log("commentsArray filter", commentsArray);
  
  const filteredComments = commentsArray.filter((comment) =>
    comment.text.toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log("filter:", filteredComments);

  // Event handler to update searchInput for search bar

  const handleBtnAClick = () => {
    console.log("show postcard", showPostcard);
    if (!showPostcard) {
      setShowPostcard(true);
      setShowAskQuestion(false);
    }
  };

  // Event handler for visibility of Postcard

  return (
    <Grid>
      <Grid className="SearchBarContainer">
        <SearchBar onChange={handleSearchChange} />
      </Grid>

      <Grid className="centeredContainer">
        <img className="medImg" src={AdviceText} alt="Advice Text" />
      </Grid>
      <>
        <Grid className="questionButtonContainer">
          <Grid>
            {showAskQuestion && (
              <ActionButton skill="Ask Question" onClick={handleBtnAClick} />
            )}
            {showPostcard && (
              <PostCard
                type="Question"
                setCommentsArray={setCommentsArray}
                setShowPostcard={setShowPostcard}
                setShowAskQuestion={setShowAskQuestion}
              />
            )}
          </Grid>
        </Grid>
        <Grid className="center">
          <img className="magicBand" src={Magic} alt="shooting stars" />
        </Grid>
        <Grid sx={{ padding: "20px" }} className="receiveAdviceDiv">
          {filteredComments.map((comment) => (
            <ContentCard
              key={comment.id}
              type={"Question:"}
              cardId={comment.cardId}
              question={comment.text}
            />
          ))}
          {askAdviceCardData
            .filter((type) =>
              type.question.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((type, index) => (
              <ContentCard
                key={index}
                type={type.type}
                cardId={type.cardId}
                question={type.question}
              />
            ))}
        </Grid>
      </>
      <Footer />
    </Grid>
  );
}

export default Advice;
