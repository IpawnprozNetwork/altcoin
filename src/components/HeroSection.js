import React from 'react';
import '../styles/HeroSection.css';  // Correct the path to point to the styles folder

const HeroSection = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="background-video">
        <source src="https://stonkscoin.org/images/stocksbg.gif" type="video/mp4" />
        <source src="https://stonkscoin.org/images/stocksbg.gif" type="video/webm" />
      </video>
      <h1>Welcome to Trust in Pawgress</h1>
      <p>Join us on our journey!</p>
    </div>
  );
};

export default HeroSection;
