import * as React from "react";
import Grid from "@mui/joy/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


export default function AdviceInitialButton({ type, onClick }) {

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
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: "#233349", color: "#ffff", fontWeight: "bolder", borderRadius: "10px", "&:hover": {backgroundColor: "#5378AB",} }}
          onClick={onClick}
        >
          <Typography
            sx={{
              fontFamily: "Verdana",
              fontSize: "40px",
              textTransform: "initial",
              whiteSpace: "nowrap",
            }}
          >
            {type}
          </Typography>
        </Button>
    </Grid>
  );
}
