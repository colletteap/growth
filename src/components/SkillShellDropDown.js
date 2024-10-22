import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SkillShellDropDown({ onChange }) {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch('http://localhost:3001/skillSearch', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSkills(data); 
          console.log('Fetched skills:', data); 
        } else {
          const errorText = await response.text();
          console.error('Failed to fetch skills data:', response.status, errorText);
        }
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    getSkills(); 
  }, []); 

  const handleSkillChange = (event, newValue) => {
    setSelectedSkill(newValue);
    onChange(newValue); 
  };

  return (
    <Autocomplete
      disablePortal
      id="dropdown"
      options={skills}
      getOptionLabel={(option) => option.skill}
      sx={{ width: 300, backgroundColor: "#fff", borderRadius: "10px" }}
      onChange={handleSkillChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="skills..."
          InputProps={{
            ...params.InputProps
          }}
          sx={{
            '& .MuiInputBase-input::placeholder': {
              color: 'black',
              opacity: 1,
            }
          }}
        />
      )}
    />
  );
}
