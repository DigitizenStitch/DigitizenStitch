import React, { useEffect, useState, useRef } from 'react';
import p1 from '../assets/pa1.jpeg';
import p2 from '../assets/pa2.jpeg';
import p3 from '../assets/pa3.jpeg';
import p4 from '../assets/pa4.jpeg';
import p5 from '../assets/pa5.jpeg';
import p6 from '../assets/pa6.jpeg';
import p7 from '../assets/pa7.jpeg';
import p8 from '../assets/pa8.jpeg';
import p9 from '../assets/pa9.jpeg';
import p10 from '../assets/pa10.jpeg';

const Patches = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="patches"
      ref={containerRef}
      className={`py-12 bg-gray-50 transition-all duration-1000 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Patch ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patches;
