import React, { useState, useEffect } from "react";
import "../styles/Advice.css";
import Grid from "@mui/joy/Grid";
import ActionButton from "../components/Actionbutton";
import ContentCard from "../components/Contentcard";
import PostCard from "../components/Postcard";
import SearchBar from "../components/Searchbar";
import Magic from "../assets/MagicSeg.png";
import AdviceText from "../assets/AdviceTextHQ.png";
import Footer from "../components/Footer";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(true);
  const [commentsArray, setCommentsArray] = useState(() => {
    const storedComments = localStorage.getItem("commentsArray");
    return storedComments ? JSON.parse(storedComments) : [];
  });
  const [searchInput, setSearchInput] = useState("");
  const [askAdviceCardData, setAskAdviceCardData] = useState([]);

  useEffect(() => {
    const fetchAskAdviceCardData = async () => {
      try {
        const response = await fetch("http://localhost:3001/askAdviceCardData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAskAdviceCardData(data); // Set the fetched data
        } else {
          console.error("Failed to fetch advice data");
        }
      } catch (error) {
        console.error("Error fetching advice data:", error);
      }
    };

    fetchAskAdviceCardData(); // Fetch data when the component loads
  }, []);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredComments = commentsArray.filter((comment) =>
    comment.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredAdviceData = askAdviceCardData.filter((type) =>
    type.question.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleBtnAClick = () => {
    if (!showPostcard) {
      setShowPostcard(true);
      setShowAskQuestion(false);
    }
  };

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
          {filteredAdviceData.map((type, index) => (
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
