import React from 'react';
import './App.css'; // Ensure the App.css file exists in the src directory

import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
