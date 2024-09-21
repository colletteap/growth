import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { skillData } from "./Data";
import { useNavigate } from "react-router-dom";

export default function SkillLandingDropDown() {
  const navigate = useNavigate();

  const handleSkillSelect = (event, skill) => {
    if (skill) {
      navigate(skill.linkTo);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="dropdown"
      options={skillData}
      getOptionLabel={(option) => option.skill}
      sx={{ width: 300, backgroundColor: "#fff", borderRadius: "15px" }}
      onChange={handleSkillSelect}
      renderInput={(params) => (
        <TextField {...params } />
      )}
    />
  );
}
