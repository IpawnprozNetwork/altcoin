import React from 'react';
import backgroundImage from '../assets/background-v2.jpg'; // Make sure this path is correct

import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to Trust in Pawgress</h1>
      <p>Join us on our journey!</p>
    </div>
  );
};

export default HeroSection;
