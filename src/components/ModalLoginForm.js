import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import Grid from "@mui/joy/Grid";
import Growth from '../assets/GrowthSM.svg';
import getBaseUrl from "../utils/getBaseUrl";

function ModalLoginForm({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === 'loginModal') {
      onClose();
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${getBaseUrl()}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        // Check if necessary data is present
        if (data && data.userId && data.accessToken && data.refreshToken) {
          // Store userId, accessToken, and refreshToken in localStorage
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);

          console.log('Tokens and userId stored:', data.accessToken, data.refreshToken, data.userId);

          // Navigate to the user's profile page
          navigate(`/profile/${data.userId}`);
        } else {
          console.error('Required user data not found in response:', data);
        }
      } else {
        const errorData = await response.json();
        console.error('Login failed', errorData.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Grid id="loginModal" className="modal" onClick={handleOutsideClick}>
      <form className="modal-content animate" onSubmit={handleLogin}>
        <Grid className="imgcontainer">
          <span onClick={onClose} className="close" title="Close Modal">&times;</span>
          <img src={Growth}  alt="Avatar" className="avatar" />
        </Grid>

        <Grid className="container">
          <h2>Login to Growth</h2>
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className='mbutton' type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </Grid>

        <Grid className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" onClick={onClose} className="mbutton cancelbtn">Cancel</button>
          <span className="psw">Forgot <p>password?</p></span>
        </Grid>
      </form>
    </Grid>
  );
}

export default ModalLoginForm;
