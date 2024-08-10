import React from "react";
import Grid from "@mui/joy/Grid";
import AuthButtons from "./AuthButtons";

const SignUpBox = () => {
return (
    <Grid
    container
    sx={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      justifyItems: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}
  >
    <Grid item>
      <h2>Growth</h2>
    </Grid>
    <Grid item>
      <AuthButtons />
    </Grid>
  </Grid>
)
};

export default SignUpBox;