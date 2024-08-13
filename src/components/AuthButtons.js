import React, { useState } from 'react';
import ModalLoginForm from './ModalLoginForm';
import ModalSignUpForm from './ModalSignUpForm';
import Grid from "@mui/joy/Grid";
import Button from '@mui/joy/Button';

function AuthButtons() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleCloseSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <Grid style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "10px",
        padding: "10px",
        justifyItems: "center",
      }}
      >
      <Grid item xs={6}>
        <Button sx={{
          bgcolor: "#233349",
          color: "#ffff",
          fontWeight: "bolder",
          borderRadius: "10px",
          "&:hover": { backgroundColor: "#5378AB" },
        }}
        onClick={handleOpenLoginModal}
        >
        Log In
      </Button>
      </Grid>
      <Grid item xs={6}>
      <Button sx={{
          bgcolor: "#233349",
          color: "#ffff",
          fontWeight: "bolder",
          borderRadius: "10px",
          "&:hover": { backgroundColor: "#5378AB" },
        }}
        onClick={handleOpenSignUpModal}
        >
        Sign Up
      </Button>
      </Grid>

      <ModalLoginForm isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <ModalSignUpForm isOpen={isSignUpModalOpen} onClose={handleCloseSignUpModal} />
    </Grid>
  );
}

export default AuthButtons;
