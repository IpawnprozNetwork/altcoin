import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source src="https://stonkscoin.org/images/stocksbg.gif" type="video/mp4" />
        {/* You can add additional formats for compatibility */}
        <source src="https://stonkscoin.org/images/stocksbg.gif" type="video/webm" />
      </video>
      <h1>Welcome to Trust in Pawgress</h1>
      <p>Join us on our journey!</p>
    </div>
  );
};

export default HeroSection;
