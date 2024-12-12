import React, { useState, useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; 
import getBaseUrl from "../utils/getBaseUrl";

export default function BlankSkillCard({ skillname }) {
  const [skillData, setSkillData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [editingSkillId, setEditingSkillId] = useState(null); 
  const [updatedDetails, setUpdatedDetails] = useState(""); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userId");
    if (loggedInUser) {
      setUserId(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const fetchSkillInfo = async () => {
      try {
        const response = await fetch(
          `${getBaseUrl()}/skillInfo?skill=${skillname.skillname}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSkillData(data);
        } else {
          console.error("Failed to fetch skill info");
        }
      } catch (error) {
        console.error("Error fetching skill info:", error);
      }
    };

    fetchSkillInfo();
  }, [skillname]);

  const startEditing = (id, currentDetails) => {
    setEditingSkillId(id);
    setUpdatedDetails(currentDetails); 
  };

  const cancelEditing = () => {
    setEditingSkillId(null); 
    setUpdatedDetails(""); 
  };

  const handleUpdate = async (id) => {
    if (!updatedDetails.trim()) {
      alert("Details cannot be empty.");
      return;
    }

    const token = localStorage.getItem("accessToken");
    console.log(token);
    try {
      const response = await fetch(`${getBaseUrl()}/skillInfo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ details: updatedDetails, userId }),
      });

      if (response.ok) {
        
        setSkillData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, details: updatedDetails } : item
          )
        );
        setEditingSkillId(null); 
      } else {
        console.error("Failed to update skill");
      }
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("accessToken");
  
    try {
      const response = await fetch(`${getBaseUrl()}/skillInfo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ userId }), 
      });
  
      if (response.ok) {
        setSkillData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete skill");
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const container = {
    display: "flex",
    flexFlow: "row wrap",
  };

  const cardStyle = {
    display: "flex",
    flexFlow: "row wrap",
    padding: "10px",
    justifyContent: "center",
    width: "100%",
    margin: "10px",
    gap: "80px",
  };

  const headingStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontFamily: "Quicksand, sans serif",
    color: "#233349",
    backgroundColor: "#fcf9da",
    padding: "40px 20px 40px 20px",
    textAlign: "center",
  };

  return (
    <>
      <Grid style={container}>
        <h1 style={headingStyle}>Learn new skills</h1>
        <Grid style={cardStyle}>
          {skillData.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                backgroundColor: "#42536b",
                minWidth: 300,
                width: "25%",
                border: "2px solid #fcf9da",
                borderRadius: "10px",
                "--Card-radius": (theme) => theme.vars.radius.xs,
              }}
            >
              <CardContent
                orientation="horizontal"
                sx={{ alignItems: "flex-start", gap: 10, position: "relative" }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      color: "#ffff",
                      textAlign: "start",
                      fontWeight: "bold",
                      position: "absolute",
                      top: 3,
                    }}
                    fontSize="16px"
                  >
                    {item.skill}
                  </Typography>

                  {/* Only show the input field for the skill being edited */}
                  {editingSkillId === item.id ? (
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={updatedDetails}
                      onChange={(e) => setUpdatedDetails(e.target.value)}
                      sx={{ width: "100% !important", backgroundColor: "#fcf9da", marginTop: "40px", borderRadius: "10px" }}
                    />
                  ) : (
                    <Typography
                      sx={{
                        backgroundColor: "#ffff",
                        textAlign: "start",
                        border: "1px solid #233349",
                        borderRadius: "5px",
                        padding: "6px",
                        marginTop: "30px",
                      }}
                    >
                      {item.details}
                    </Typography>
                  )}

                  {/* Conditionally render Update/Cancel buttons if the user is editing */}
                  {userId === item.userId && (
                    <div style={{ marginTop: "10px" }}>
                      {editingSkillId === item.id ? (
                        <>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#233349",
                              color: "#fff", 
                              "&:hover": {
                                backgroundColor: "#1a2738", 
                              },
                            }}
                            onClick={() => handleUpdate(item.id)}
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#233349",
                              color: "#fff", 
                              "&:hover": {
                                backgroundColor: "#1a2738", 
                              },
                            }}
                            onClick={cancelEditing}
                            style={{ marginLeft: "10px" }}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#233349",
                              color: "#fff", 
                              "&:hover": {
                                backgroundColor: "#1a2738", 
                              },
                            }}
                            onClick={() => startEditing(item.id, item.details)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#233349",
                              color: "#fff", 
                              "&:hover": {
                                backgroundColor: "#1a2738", 
                              },
                            }}
                            onClick={() => handleDelete(item.id)}
                            style={{ marginLeft: "10px" }}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
