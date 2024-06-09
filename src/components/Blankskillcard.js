import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { skillInfo } from "./Data";
import Grid from "@mui/joy/Grid";

export default function BlankSkillCard({ skillname }) {
  const filteredSkills = skillInfo.filter(
    (item) => item.skill === skillname.skillname
  );

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
          {filteredSkills.map((item, index) => (
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
                </CardContent>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
