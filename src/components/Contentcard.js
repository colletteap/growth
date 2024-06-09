import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import CustomButton from "../soundReact/customButton";

// Import statements

export default function ContentCard({ type, cardId, question }) {
  // Defines functional component that accepts 3 props and returns JSX to render a card for displaying and posting comments

  const [comment, setComment] = React.useState("");
  const [commentsList, setCommentsList] = React.useState(() => {
    const storedComments = localStorage.getItem(`comments_${cardId}`);
    return storedComments ? JSON.parse(storedComments) : [];
  });

  /* State hooks, define comment variable and function setComment with initial value being an empty string
   The initial value for commentsList is retrieved from local storage using cardId prop, if there
   is no value, it defaults to an empty array*/

  React.useEffect(() => {
    console.log("card id", cardId);

    localStorage.setItem(`comments_${cardId}`, JSON.stringify(commentsList));
  }, [commentsList, cardId]);

  /* This effect hook is used to update local storage whenever commentsList or cardId changes
 & stores commentsList array in local storage under key specific to cardId */

  const handlePostClick = () => {
    if (comment.trim() === "") {
      // this function called when user clicks Post checks if comment is empty..

      return;
    }
    const newComment = {
      id: commentsList.length + 1,
      text: comment,
      cardId: commentsList.length + 1,
    };
    console.log("new comment", newComment);
    // If not, it creates a new comment object newComment and adds to commentsList and resets it to an empty string

    setCommentsList([...commentsList, newComment]);
    setComment("");
  };
  // console.log("comment", comment)

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#42536b",
        width: "300px",
        fontFamily: "Quicksand",
        fontWeight: "bold",
        border: "2px solid #fcf9da",
        borderRadius: "15px",
        "--Card-radius": (theme) => theme.vars.radius.xs,
        height: "20vh",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "#ffff",
          border: "2px solid #fcf9da",
          borderRadius: "10px",
          padding: "8px",
        }}
      >
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        ></Link>
        <Typography fontSize="sm" style={{ whiteSpace: "pre-wrap" }}>
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            {type}
          </Link>{" "}
          {question}
        </Typography>
      </CardContent>
      {commentsList.map((commentItem) => (
        <CardContent
          key={commentItem.id}
          sx={{
            backgroundColor: "#ffff",
            border: "2px solid #fcf9da",
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
          placeholder="Add a comment…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            flex: 1,
            px: 0,
            "--Input-focusedThickness": "0px",
            border: "2px solid #fcf9da",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <CustomButton
          sx={{
            backgroundColor: "#8c7b6f",
            color: "#ffff",
          }}
          onClick={handlePostClick}
          variant={"Post"}
          underline="none"
          role="button"
          border="1px solid #233349"
          borderRadius="10px"
          padding="5px"
        >
          Post
        </CustomButton>
      </CardContent>
    </Card>
  );
}
