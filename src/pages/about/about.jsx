import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About ERAYA Cosmetics</h1>
          <p className="about-subtitle">Crafting Elegance, Redefining Beauty</p>
        </div>
      </section>

      <section className="about-content">
        <h2 className="section-title">Our Story</h2>
        <p className="section-description">
          ERAYA Cosmetics was born from a passion for luxury and a commitment to quality. Our mission is to empower individuals to embrace their unique beauty through our meticulously crafted skincare, makeup, and fragrance collections. Each product is designed with the finest ingredients, blending science and artistry to deliver unparalleled results.
        </p>
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We envision a world where beauty is an expression of individuality and sophistication. At ERAYA, we strive to create timeless products that elevate your daily routine, offering a touch of opulence in every detail.
        </p>
        <a href="/hair" className="about-cta">Explore Our Collections</a>
      </section>
    </div>
  );
};

export default About;

