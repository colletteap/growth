import * as React from "react";
import CustomButton from "../soundReact/customButton";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/joy";
import getBaseUrl from "../utils/getBaseUrl";

export default function SkillButton({ skill, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); 
    navigate(`${getBaseUrl()}/SkillShell`); 
  };
  
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
    
        <CustomButton
          size="large"
          sx={{ minWidth: 180 }}
          onClick={handleClick}
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
    
    </Grid>
  );
}
