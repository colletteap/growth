import React from 'react';
import { useNavigate } from 'react-router-dom';
import getBaseUrl from "../utils/getBaseUrl";

const LogoutButton = () => {
  const navigate = useNavigate();

const handleLogout = async (event) => {
    event.preventDefault();
  
    try {
      const token = localStorage.getItem('accessToken'); 
  
      const response = await fetch(`${getBaseUrl()}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Logout successful:', data);
  
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
  
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Logout failed', errorData.error);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};
  export default LogoutButton;