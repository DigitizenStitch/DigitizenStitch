import React from 'react'
import p1 from '../assets/pa1.jpeg';  // Correct extension
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
  const images = [p1, p2, p3, p4, p5, p6, p7, p8,p9,p10];
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


export default Patches