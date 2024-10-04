import React, { useState, useRef, useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Button from "@mui/material/Button";

export default function BlankSkillCard({ skillname }) {
  const [skillData, setSkillData] = useState([]);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userId'); 
    if (loggedInUser) {
      setUserId(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const fetchSkillInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3001/skillInfo?skill=${skillname.skillname}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSkillData(data); 
        } else {
          console.error('Failed to fetch skill info');
        }
      } catch (error) {
        console.error('Error fetching skill info:', error);
      }
    };

    fetchSkillInfo(); 
  }, [skillname]);

  const handleUpdate = (skillId) => {
    // Logic for updating skill
    console.log('Update skill with ID:', skillId);
  };

  const handleDelete = (skillId) => {
    // Logic for deleting skill
    console.log('Delete skill with ID:', skillId);
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
                    {/* Conditionally render Update and Delete buttons if logged-in user is the post owner */}
                    {userId === item.userId && (
                    <div style={{ marginTop: '10px' }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handleUpdate(item.skillId)}
                      >
                        Update
                      </Button>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => handleDelete(item.skillId)}
                        style={{ marginLeft: '10px' }}
                      >
                        Delete
                      </Button>
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
