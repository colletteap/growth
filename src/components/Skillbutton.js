import * as React from "react";
import CustomButton from "../soundReact/customButton";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/joy";

export default function SkillButton({ skill, linkTo, onClick }) {
  return (
    <Grid
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gridGap: "10px",
        padding: "10px",
        justifyItems: "center",
      }}
    >
      <Link to={linkTo}>
        <CustomButton
          size="large"
          sx={{ minWidth: 180 }}
          onClick={onClick}
          variant={"Skill"}
          disableSound={true}
        >
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontWeight: "bold",
              fontSize: "19px",
              textTransform: "initial",
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </Typography>
        </CustomButton>
      </Link>
    </Grid>
  );
}
