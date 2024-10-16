import React, { useState, useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import "../styles/Advice.css";
import CustomButton from "../soundReact/customButton";

export default function ContentCard({ type, cardId, question, questionUserId }) {
  const [comment, setComment] = useState(""); 
  const [commentsList, setCommentsList] = useState([]); 
  const [editingCommentId, setEditingCommentId] = useState(null); 
  const [updatedComment, setUpdatedComment] = useState(""); 
  const [editingQuestion, setEditingQuestion] = useState(false); 
  const [updatedQuestion, setUpdatedQuestion] = useState(question); 
  const userId = localStorage.getItem('userId');  
  const accessToken = localStorage.getItem('accessToken');

  console.log('CardId:', cardId);

  // Fetch comments for the specific comment id
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3001/comments?cardId=${cardId}`, {
          headers: {
            "Content-Type": "application/json",
             
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
  }, [cardId]);

  // Post a new comment
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
        setCommentsList([...commentsList, { ...newComment, id: data.commentId }]); 
        setComment(""); 
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

// Update a comment
const handleUpdateClick = async (commentId) => { 
  if (!updatedComment.trim()) {
    alert("Comment cannot be empty.");
    return;
  }
  console.log('Updating comment with id:', commentId, 'and comment:', updatedComment, 'by user:', userId);
  try {
    const response = await fetch(`http://localhost:3001/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ commentId, comment: updatedComment, userId }),
    });

    if (response.ok) {
      const updatedData = await response.json();

      // Update the comments list state to reflect the change
      setCommentsList((prevList) =>
        prevList.map((comment) => 
          comment.id === commentId ? { ...comment, comment: updatedData.comment } : comment
        )
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
const handleDeleteClick = async (commentId) => { 
  console.log('Deleting comment with id:', commentId, 'by user:', userId);  
    try {
    const response = await fetch(`http://localhost:3001/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userId }), 
    });

    if (response.ok) {
      setCommentsList(commentsList.filter((comment) => comment.id !== commentId));
    } else {
      console.error("Failed to delete comment");
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
};

  // Start editing a comment
  const startEditing = (commentId, currentText) => {
    setEditingCommentId(commentId);
    setUpdatedComment(currentText); 
  };

  // Cancel comment editing
  const cancelEditing = () => {
    setEditingCommentId(null);
    setUpdatedComment("");
  };

  // Update the question
  const handleUpdateQuestionClick = async () => {
    if (!updatedQuestion.trim()) {
      alert("Question cannot be empty.");
      return;
    }
    console.log('CardId being sent to backend:', cardId);

    try {
      const response = await fetch(`http://localhost:3001/questions/${cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ cardId, question: updatedQuestion, userId }),
      });

      if (response.ok) {
        setEditingQuestion(false);
      } else {
        console.error("Failed to update question");
      }
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  // Delete the question
  const handleDeleteQuestionClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/questions/${cardId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        console.log("Question deleted successfully");
      } else {
        console.error("Failed to delete question");
      }
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <Card className="cardWidth" variant="outlined">
      <CardContent>
        {editingQuestion ? (
          <Input
            variant="plain"
            value={updatedQuestion}
            onChange={(e) => setUpdatedQuestion(e.target.value)}
            sx={{ width: "100%", marginBottom: "10px" }}
          />
        ) : (
          <Typography sx={{ fontWeight: "bold" }}>{type}: {question}</Typography>
        )}
      </CardContent>

      {/* Edit/Delete buttons for the question */}
      {userId === questionUserId && (
        <div className="rowButtons" style={{ marginTop: "10px" }}>
          {editingQuestion ? (
            <>
              <CustomButton
                onClick={handleUpdateQuestionClick}
                variant={"Save"}
                sx={{ backgroundColor: "#233349", color: "#fff" }}
              >
                Save
              </CustomButton>
              <CustomButton className="contentButton"
                onClick={() => setEditingQuestion(false)}
                variant={"Cancel"}
        
              >
                Cancel
              </CustomButton>
            </>
          ) : (
            <>
              <CustomButton
                onClick={() => setEditingQuestion(true)}
                variant={"Edit"}
              >
                Edit
              </CustomButton>
              <CustomButton
                onClick={handleDeleteQuestionClick}
                variant={"Delete"}
                sx={{ backgroundColor: "#8c7b6f", color: "#fff", marginLeft: "10px", fontSize: "12px", minWidth: "80px", height: "30px" }}
              >
                Delete
              </CustomButton>
            </>
          )}
        </div>
      )}
        {/* Comments Section with max height and scrollbar */}
    <div
      style={{
        maxHeight: "100px", 
        overflowY: "auto",  
        paddingRight: "10px",
      }}
    >
      {commentsList.map((commentItem) => (
        <CardContent  key={commentItem.id}>
          {editingCommentId === commentItem.id ? (
            <Input 
              variant="plain"
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
              sx={{ width: "100%", marginBottom: "10px", borderColor: "black" }}
            />
          ) : (
            <Typography >{commentItem.comment}</Typography>
          )}

          {/* Edit/Delete buttons for comments */}
          {userId === commentItem.userId && (
            <div className="rowButtons" style={{ marginTop: "10px" }}>
              {editingCommentId === commentItem.id ? (
                <>
                  <CustomButton
                    onClick={() => handleUpdateClick(commentItem.id)}
                    variant={"Save"}
                    sx={{ backgroundColor: "#8c7b6f", color: "#fff" }}
                  >
                    Save
                  </CustomButton>
                  <CustomButton
                    onClick={cancelEditing}
                    variant={"Cancel"}
                    sx={{ backgroundColor: "#8c7b6f", color: "#fff", marginLeft: "10px" }}
                  >
                    Cancel
                  </CustomButton>
                </>
              ) : (
                <>
                  <CustomButton
                    onClick={() => startEditing(commentItem.id, commentItem.comment)}
                    variant={"Edit"}
                    sx={{ backgroundColor: "#233349", color: "#fff" }}
                  >
                    Edit
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleDeleteClick(commentItem.id)}
                    variant={"Delete"}
                    sx={{ backgroundColor: "#8c7b6f", color: "#fff", marginLeft: "10px" }}
                  >
                    Delete
                  </CustomButton>
                </>
              )}
            </div>
          )}
        </CardContent>
      ))}
      </div>

      {/* Input to add a new comment */}
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <Input
          variant="plain"
          size="sm"
          placeholder="Add a comment..."
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
          sx={{ backgroundColor: "#8c7b6f", color: "#ffff" }}
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
