import React from 'react';
import '../styles/Modal.css';

function ModalSignUpForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === 'signupModal') {
      onClose();
    }
  };

  return (
    <>
    <div>
        <h2>Sign Up for Growth</h2>
    </div>
    <div id="signupModal" className="modal" onClick={handleOutsideClick}>
      <form className="modal-content animate" action="/action_page.php" method="post">
        <div className="imgcontainer">
          <span onClick={onClose} className="close" title="Close Modal">&times;</span>
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="email"><b>Name</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Email</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Sign Up!</button>
          <label>
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" onClick={onClose} className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <p>password?</p></span>
        </div>
      </form>
    </div>
    </>
  );
}

export default ModalSignUpForm;
