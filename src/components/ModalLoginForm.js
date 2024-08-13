import React from 'react';
import '../styles/Modal.css';
import Grid from "@mui/joy/Grid";

function ModalLoginForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === 'loginModal') {
      onClose();
    }
  };

  return (
    <>
    <Grid id="loginModal" className="modal" onClick={handleOutsideClick}>
      <form className="modal-content animate" action="/action_page.php" method="post">
        <Grid className="imgcontainer">
          <span onClick={onClose} className="close" title="Close Modal">&times;</span>
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </Grid>

        <Grid className="container">
        <h2>Login to Growth</h2>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

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
    </>
  );
}

export default ModalLoginForm;
