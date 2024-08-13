import React from "react";
import Grid from "@mui/joy/Grid";
import AuthButtons from "./AuthButtons";

const SignUpBox = () => {
return (
    <Grid
    container
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyItems: 'center',
      alignItems: 'center',
      minWidth: '100px',
      maxWidth: '300px',
      textAlign: 'center',
      backgroundColor: 'lightblue',
borderRadius: '10px',
    }}
  >
    <Grid item>
      <h2
      sx={{
        margin: '0',
      }}>
        Growth</h2>
    </Grid>
    <Grid item>
      <AuthButtons />
    </Grid>
  </Grid>
)
};

export default SignUpBox;