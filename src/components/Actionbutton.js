import * as React from "react";
import Grid from "@mui/joy/Grid";
import { Typography } from "@mui/material";
import CustomButton from "../soundReact/customButton";

export default function ActionButton({ skill, onClick }) {
  return (
    <Grid
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "10px",
        padding: "10px",
        justifyItems: "center",
      }}
    >
      <CustomButton
        size="medium"
        sx={{
          bgcolor: "#233349",
          color: "#ffff",
          fontWeight: "bolder",
          borderRadius: "10px",
          "&:hover": { backgroundColor: "#5378AB" },
        }}
        onClick={onClick}
        variant={"Question"}
      >
        <Typography
          sx={{
            fontFamily: "Quicksand",
            textTransform: "initial",
            whiteSpace: "nowrap",
          }}
        >
          {skill}
        </Typography>
      </CustomButton>
    </Grid>
  );
}
