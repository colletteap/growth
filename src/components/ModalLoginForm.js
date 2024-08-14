import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import Grid from "@mui/joy/Grid";

function ModalLoginForm({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
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
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
      
        const data = await response.json();
        console.log('Login successful:', data);

        // Redirect to Profile page
        navigate('/profile');
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
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </Grid>

        <Grid className="container">
          <h2>Login to Growth</h2>
          <label htmlFor="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username}
            onChange={() => setUsername(e.target.value)}
            required
          />

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={() => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </Grid>

        <Grid className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" onClick={onClose} className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <p>password?</p></span>
        </Grid>
      </form>
    </Grid>
  );
}

export default ModalLoginForm;
