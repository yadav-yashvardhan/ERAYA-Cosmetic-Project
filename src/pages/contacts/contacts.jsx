import React, { useState, useEffect } from 'react';
import './contacts.css';
import frontImage from '../../assets/front.png'; // 👈 replace with your image path
import backImage from '../../assets/back.png';   // 👈 replace with your image path

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(true);
  };

  useEffect(() => {
    let timeout;
    if (isFlipped) {
      timeout = setTimeout(() => {
        setIsFlipped(false);
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timeout);
  }, [isFlipped]);

  return (
    <div className="contact-wrapper">
      <div
        className={`contact-card ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleHover}
      >
        <div className="contact-front">
          <img src={frontImage} alt="Front" className="contact-image" />
        </div>
        <div className="contact-back">
          <img src={backImage} alt="Back" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;


