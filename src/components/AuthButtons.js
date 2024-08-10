import React, { useState } from 'react';
import ModalLoginForm from './ModalLoginForm';
import ModalSignUpForm from './ModalSignUpForm';

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
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
      <button onClick={handleOpenLoginModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Log In
      </button>
      <button onClick={handleOpenSignUpModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Sign Up
      </button>

      <ModalLoginForm isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      <ModalSignUpForm isOpen={isSignUpModalOpen} onClose={handleCloseSignUpModal} />
    </div>
  );
}

export default AuthButtons;
