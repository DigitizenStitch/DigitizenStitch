import React, { useEffect } from 'react';
import IMAGE1 from '../assets/cover.jpg';
import "./HeroCarousel.css"; // Import Custom CSS

const HeroCarousel = () => {
  useEffect(() => {
    const imageElement = document.getElementById('hero-image');
    if (imageElement) {
      imageElement.classList.add('animate-fade-zoom');
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Text and Buttons */}
        <div className="hero-text">
          <h1 className="font-playfair">Welcome to Digitize'NStitch</h1>
          <p><b>Crafting Excellence, One Stitch at a Time</b></p>
          <p>
            Elevate your brand with our expert digitization and vector graphics services—where innovation meets impeccable quality.
          </p>
          
          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hero-image">
          <img id="hero-image" src={IMAGE1} alt="Cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
