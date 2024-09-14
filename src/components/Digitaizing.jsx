import React from 'react';

// Import all images
import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';
import d7 from '../assets/d7.jpeg';
import d8 from '../assets/d8.jpeg';

const Digitaizing = () => {
  const images = [d1, d2, d3, d4, d5, d6, d7, d8]; // Add all images to an array

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
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
  );
};

export default Digitaizing;
