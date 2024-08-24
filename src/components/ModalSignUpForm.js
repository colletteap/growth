import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import Grid from "@mui/joy/Grid";

function ModalSignUpForm({ isOpen, onClose }) {
  const [firstName, setfirstName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === 'signupModal') {
      onClose();
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);

        // Redirect to Profile page or login after signup
        navigate(`/profile/${data.userId}`);
      } else {
        const errorData = await response.json();
        console.error('Registration failed', errorData.error);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <>
      <div>
        <h2>Sign Up for Growth</h2>
      </div>
      <Grid id="signupModal" className="modal" onClick={handleOutsideClick}>
        <form className="modal-content animate" onSubmit={handleSignUp}>
          <Grid className="imgcontainer">
            <span onClick={onClose} className="close" title="Close Modal">&times;</span>
            <img src="img_avatar2.png" alt="Avatar" className="avatar" />
          </Grid>

          <Grid className="container">
            <label htmlFor="name"><b>Name</b></label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
            />

            <label htmlFor="uname"><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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

            <button type="submit">Sign Up!</button>
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
    </>
  );
}

export default ModalSignUpForm;
