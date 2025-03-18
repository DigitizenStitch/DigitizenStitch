import React, { useEffect } from 'react';
import IMAGE1 from '../assets/cover.jpg';

const HeroCarousel = () => {
  useEffect(() => {
    const imageElement = document.getElementById('hero-image');
    if (imageElement) {
      imageElement.classList.add('animate-fade-zoom');
    }
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-blue-950 pt-24 md:pt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 ">
        {/* Left Column: Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-playfair">
            Welcome to Digitize'NStitch
          </h1>
          <p className="mt-4 text-xl sm:text-2xl lg:text-2xl font-bold">
            Crafting Excellence, One Stitch at a Time
          </p>
          <p className="mt-4 text-base sm:text-lg lg:text-lg italic">
            Elevate your brand with our expert digitization and vector graphics services—where innovation meets impeccable quality.
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-400 text-white rounded-md font-semibold hover:bg-white hover:text-blue-950 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <button
              className="px-6 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-white hover:text-blue-950 transition-colors duration-300"
            >
              <a href="#about">Learn More</a>
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center mb-8 md:mb-0">
          <img
            id="hero-image"
            src={IMAGE1}
            alt="Cover"
            className="max-w-full h-auto max-h-[80vh] object-cover rounded-lg shadow-lg opacity-0"
          />
        </div>
      </div>

      {/* Tailwind animation (avoid inline styles) */}
      <style jsx>{`
        @keyframes fadeZoom {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-zoom {
          animation: fadeZoom 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
