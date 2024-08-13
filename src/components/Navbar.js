import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NavBar.css';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';


const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo" /> {/* Using public folder path */}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/daily-deals">Daily Deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help-connect">Help & Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">Sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications"><i className="fas fa-bell"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i></Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setShowSignIn(true)}>Sign In</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={() => setShowSignUp(true)}>Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
      <SignInModal show={showSignIn} onHide={() => setShowSignIn(false)} />
      <SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} />
    </>
  );
};

export default Navbar;
