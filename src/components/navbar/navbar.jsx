import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import SigninModal from '../loginPopups/login';


function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      <div className={`navbar ${showSignin ? 'blur-background' : ''}`}>
        <h1 className='logo'>ERAYA</h1>

        <ul className="navbar-menu">
          <li className={path === "/" ? "active" : ""}>
            <Link to="/">home</Link>
          </li>

          <li className="collections-item">
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => setShowDropdown(true)}   
              onMouseLeave={() => setShowDropdown(false)}
            >
              collections
              {showDropdown && (
                <ul className="dropdown">
                  <li className={path === "/lip" ? "active" : ""}>
                    <Link to="/lip">Lipstick</Link>
                  </li>
                  <li className={path === "/hair" ? "active" : ""}>
                    <Link to="/hair">Hair</Link>
                  </li>
                  <li className={path === "/skin" ? "active" : ""}>
                    <Link to="/skin">Skin</Link>
                  </li>
                  {/* <li className="dropdown-item">Blush</li> */}
                </ul>
              )}
            </div>
          </li>     

          <li className={path === "/about" ? "active" : ""}>
            <Link to="/about">about</Link>
          </li>

          <li className={path === "/contact-us" ? "active" : ""}>
            <Link to="/contact-us">contact us</Link>
          </li>

        


        </ul>

      

        <div className="navbar-right">

       

          <button className="signin-btn" onClick={() => setShowSignin(true)}>
            Signin
          </button>
        </div>
      </div>

      {showSignin && <SigninModal onClose={() => setShowSignin(false)} />}
    </>
  );
}

export default Navbar;





