import React, { useState } from 'react';
import '../styles/Modal.css';

function ModalLoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === 'modal') {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <h2>Modal Login Form</h2>

      <button onClick={handleOpenModal} style={{ width: 'auto' }}>Login</button>

      {isModalOpen && (
        <div id="id01" className="modal" onClick={handleOutsideClick}>
          <form className="modal-content animate" action="/action_page.php" method="post">
            <div className="imgcontainer">
              <span onClick={handleCloseModal} className="close" title="Close Modal">&times;</span>
              <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={handleCloseModal} className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <p>password?</p></span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ModalLoginForm;
