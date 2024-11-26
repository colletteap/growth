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
import getBaseUrl from "../utils/getBaseUrl";

function Advice() {
  const [showPostcard, setShowPostcard] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(true);
  const [askAdviceCardData, setAskAdviceCardData] = useState([]); // For questions
  const [newQuestion, setNewQuestion] = useState(""); // State for new question
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      setAccessToken(token); 
    }
  }, []);

  // Fetch all questions from the backend
  useEffect(() => {
    const fetchAskAdviceCardData = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/questions`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAskAdviceCardData(data); // Set the fetched questions data
        } else {
          console.error("Failed to fetch advice data");
        }
      } catch (error) {
        console.error("Error fetching advice data:", error);
      }
    };

    fetchAskAdviceCardData(); // Fetch questions when the component loads
  }, []);

// Post a new question
const handlePostQuestion = async () => {
  if (!newQuestion.trim()) {
    return;
  }

  const userId = localStorage.getItem('userId');
  const questionData = {
    question: newQuestion,
    userId,
  };

  try {
    const response = await fetch(`${getBaseUrl()}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, 
      },
      body: JSON.stringify(questionData),
    });

    if (response.ok) {
      const data = await response.json();
    
      setAskAdviceCardData([...askAdviceCardData, { ...questionData, cardId: data.cardId }]);
      setNewQuestion(""); 
      setShowPostcard(true); 
    } else {
      console.error("Failed to post question");
    }
  } catch (error) {
    console.error("Error posting question:", error);
  }
};


  return (
    <Grid>
      <Grid className="SearchBarContainer">
        <SearchBar />
      </Grid>

      <Grid className="centeredContainer">
        <img className="medImg" src={AdviceText} alt="Advice Text" />
      </Grid>

      <>
        <Grid className="questionButtonContainer">
          <Grid>
            {showAskQuestion && (
              <ActionButton skill="Ask Question" onClick={() => setShowPostcard(true)} />
            )}
            {showPostcard && (
              <PostCard
                type="Question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)} 
                onSubmit={handlePostQuestion} 
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
          {askAdviceCardData.map((question, index) => (
            <ContentCard
            key={index}
            type={question.type}
            cardId={question.cardId}  
            question={question.question}
            questionUserId={question.userId} 
            />
          ))}
        </Grid>
      </>
      <Footer />
    </Grid>
  );
}

export default Advice;
