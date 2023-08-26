import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling (create this file later)

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to Gonesh's Portfolio</h2>
        <p>Your Source for Modern Web Development</p>
        <button className="cta-button">Explore Projects</button>
      </div>
    </section>
  );
};

export default HeroSection;
