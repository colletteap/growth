import React, { useState, useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import CustomButton from "../soundReact/customButton";


export default function ContentCard({ type, cardId, question }) {
  const [comment, setComment] = useState(""); 
  const [commentsList, setCommentsList] = useState([]); 
  const [editingCommentId, setEditingCommentId] = useState(null); 
  const [updatedComment, setUpdatedComment] = useState(""); 
  const [userId, setUserId] = useState(null);  
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userId'); 
    const token = localStorage.getItem('accessToken');  
    if (loggedInUser) {
      setUserId(loggedInUser);
    }
    if (token) {
      setAccessToken(token);  
    }
    console.log(token);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3001/comments?cardId=${cardId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCommentsList(data); 
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [cardId, accessToken]);

  const handlePostClick = async () => {
    if (comment.trim() === "") {
      return; 
    }
  
    const newComment = {
      cardId,       
      comment,       
      userId,        
    };
  
    try {
      const response = await fetch("http://localhost:3001/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, 
        },
        body: JSON.stringify(newComment),
      });
  
      if (response.ok) {
        const data = await response.json();
        setCommentsList([...commentsList, { ...newComment, id: data.commentId }]); // Add to commentsList
        setComment(""); 
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  // Update a comment
  const handleUpdateClick = async (id) => {
    if (!updatedComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ text: updatedComment, userId }),
      });

      if (response.ok) {
      
        setCommentsList((prevList) =>
          prevList.map((comment) => (comment.id === id ? { ...comment, text: updatedComment } : comment))
        );
        setEditingCommentId(null);
      } else {
        console.error("Failed to update comment");
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  // Delete a comment
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId }), 
      });

      if (response.ok) {
    
        setCommentsList(commentsList.filter((comment) => comment.id !== id));
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const startEditing = (id, currentText) => {
    setEditingCommentId(id);
    setUpdatedComment(currentText); 
  };

  const cancelEditing = () => {
    setEditingCommentId(null);
    setUpdatedComment("");
  };

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
          {editingCommentId === commentItem.id ? (
            <Input
              variant="plain"
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
              sx={{ width: "100%", marginBottom: "10px" }}
            />
          ) : (
            commentItem.text
          )}

          {/* Edit/Delete buttons only for the user who posted the comment */}
          {userId === commentItem.userId && (
            <div style={{ marginTop: "10px" }}>
              {editingCommentId === commentItem.id ? (
                <>
                  <CustomButton
                    onClick={() => handleUpdateClick(commentItem.id)}
                    variant={"Save"}
                    sx={{
                      backgroundColor: "#233349",
                      color: "#fff",
                    }}
                  >
                    Save
                  </CustomButton>
                  <CustomButton
                    onClick={cancelEditing}
                    variant={"Cancel"}
                    sx={{
                      backgroundColor: "#8c7b6f",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  >
                    Cancel
                  </CustomButton>
                </>
              ) : (
                <>
                  <CustomButton
                    onClick={() => startEditing(commentItem.id, commentItem.text)}
                    variant={"Edit"}
                    sx={{
                      backgroundColor: "#233349",
                      color: "#fff",
                    }}
                  >
                    Edit
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleDeleteClick(commentItem.id)}
                    variant={"Delete"}
                    sx={{
                      backgroundColor: "#8c7b6f",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </CustomButton>
                </>
              )}
            </div>
          )}
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
