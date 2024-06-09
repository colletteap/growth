import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { skillShellData } from "./Data";

export default function SkillShellDropDown({ onChange }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillChange = (event, newValue) => {
    setSelectedSkill(newValue);
    onChange(newValue);
  };
  console.log("selectedskill", setSelectedSkill);
  return (
    <Autocomplete
      disablePortal
      id="dropdown"
      options={skillShellData}
      getOptionLabel={(option) => option.skill}
      sx={{ width: 300, backgroundColor: "#fff", borderRadius: "15px" }}
      onChange={handleSkillChange}
      renderInput={(params) => (
        <TextField {...params} label="Choose a skill..." />
      )}
    />
  );
}
