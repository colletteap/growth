import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

const handleLogout = async (event) => {
    event.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); 
  
      const response = await fetch('http://localhost:4001/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Logout successful:', data);
  
        localStorage.removeItem('token');
  
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