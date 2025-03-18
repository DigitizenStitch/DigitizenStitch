import React, { useEffect, useState, useRef } from 'react';
import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';
import d7 from '../assets/d7.jpeg';
import d8 from '../assets/d8.jpeg';

const Digitaizing = () => {
  const images = [d1, d2, d3, d4, d5, d6, d7, d8];
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="digitizing"
      ref={containerRef}
      className={`py-12 transition-all duration-1000 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-white`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Digitaizing;
