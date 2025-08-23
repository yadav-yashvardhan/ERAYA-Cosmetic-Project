import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import SigninModal from '../loginPopups/login';

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className={`navbar ${showSignin ? 'blur-background' : ''}`}>
        <h1 className="logo">ERAYA</h1>

        {/* Hamburger icon (mobile only) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul
          ref={menuRef}
          className={`navbar-menu ${menuOpen ? 'open' : ''}`}
          onMouseLeave={() => setMenuOpen(false)} // auto close on mouse leave
        >
          <li className={path === '/' ? 'active' : ''}>
            <Link to="/" onClick={() => setMenuOpen(false)}>home</Link>
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
                  <li className={path === '/lip' ? 'active' : ''}>
                    <Link to="/lip" onClick={() => setMenuOpen(false)}>Lipstick</Link>
                  </li>
                  <li className={path === '/hair' ? 'active' : ''}>
                    <Link to="/hair" onClick={() => setMenuOpen(false)}>Hair</Link>
                  </li>
                  <li className={path === '/skin' ? 'active' : ''}>
                    <Link to="/skin" onClick={() => setMenuOpen(false)}>Skin</Link>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li className={path === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>about</Link>
          </li>

          <li className={path === '/contact-us' ? 'active' : ''}>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>contact us</Link>
          </li>
        </ul>

        {/* Right side buttons */}
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


