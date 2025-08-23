import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="ERAYA Logo" />
          <p>
            ERAYA - Your trusted platform for innovative solutions. Connect with us
            for more information and updates.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook} alt="Follow us on Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter} alt="Follow us on Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin} alt="Connect with us on LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram} alt="Follow us on Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+12124567892">+1-212-456-7892</a></li>
            <li><a href="mailto:contact@eraya.com">contact@eraya.com</a></li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2025 © ERAYA.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
