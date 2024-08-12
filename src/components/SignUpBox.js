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
      minWidth: '100px',
      maxWidth: '300px',
      paddingLeft: '150px',
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