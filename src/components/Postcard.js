import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import CustomButton from "../soundReact/customButton";

// Import startements

export default function Postcard({
  type,
  cardId,
  setCommentsArray,
  setShowPostcard,
  setShowAskQuestion,
}) {
  // Declares a functional component named 'Postcard' that accepts 5 props and returns JSX to render a card for posting comments

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  // These are state hooks; defining a state variable of comment and a function setComment, initial value is an empty string

  const handlePostQuestionClick = () => {
    if (comment.trim() === "") {
      // This is the event handler, a function called when user clicks Post button, checks if comment is not empty...

      return;
    }
    const storedComments = localStorage.getItem("commentsArray");
    const commentsArray = storedComments ? JSON.parse(storedComments) : [];

    const newComment = {
      id: commentsList.length + 1,
      type: type,
      text: comment,
      cardId: commentsArray.length + 1,
    };

    // will return object newComment

    localStorage.setItem(
      "commentsArray",
      JSON.stringify([newComment, ...commentsArray])
    );

    // Putting the commentsArray into local storage and creating a newComment to be placed in front of the exisiting commentsArray

    setCommentsList([newComment, ...commentsList]);
    setComment("");
    setCommentsArray((prevComments) => [newComment, ...prevComments]);
    setShowPostcard(false);
    setShowAskQuestion(true);
  };

  // Updates commentsList, resets comment, adds new comment to commentsArray and updates state to show and hide postcard

  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        border: "2px solid black",
        borderRadius: "15px",
        "--Card-radius": (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontWeight="lg"
          textColor="text.primary"
        >
          {type}
        </Link>
      </CardContent>
      {commentsList.map((commentItem) => (
        <CardContent
          key={commentItem.id}
          sx={{
            border: "2px solid #A8512F",
            borderRadius: "10px",
            padding: "8px",
            fontSize: "sm",
          }}
        >
          {commentItem.text}
        </CardContent>
      ))}
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <Input
          variant="plain"
          size="sm"
          placeholder="Ask a question!"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            flex: 1,
            px: 0,
            "--Input-focusedThickness": "0px",
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
