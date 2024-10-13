import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Input from "@mui/joy/Input";
import CustomButton from "../soundReact/customButton";

export default function PostCard({
  setShowPostcard,
  setShowAskQuestion,
}) {
  const [question, setQuestion] = useState(""); // Updated state to store the question text
  const accessToken = localStorage.getItem("accessToken"); // Token for authorization
  const userId = localStorage.getItem("userId"); // User ID from localStorage

  // Handle posting the question
  const handlePostQuestionClick = async () => {
    if (question.trim() === "") {
      return; // Ensure question is not empty
    }

    const newQuestion = {
      question, // Text of the question (from the input field)
      userId,  // User ID of the person posting the question
    };

    try {
      const response = await fetch("http://localhost:3001/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include access token for authentication
        },
        body: JSON.stringify(newQuestion), // Send question data to the backend
      });

      if (response.ok) {
        setQuestion(""); // Clear the question input
        setShowPostcard(false); // Hide the Postcard component after posting
        setShowAskQuestion(true); // Show the 'Ask Question' button again
      } else {
        console.error("Failed to post question");
      }
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        border: "2px solid black",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Input
          variant="plain"
          size="sm"
          placeholder="Ask a question!"
          value={question} // Bound to the state
          onChange={(e) => setQuestion(e.target.value)}
          sx={{
            flex: 1,
            px: 0,
            border: "2px solid #233349",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <CustomButton
          onClick={handlePostQuestionClick}
          variant={"Post"}
          underline="none"
          role="button"
        >
          Post
        </CustomButton>
      </CardContent>
    </Card>
  );
}
