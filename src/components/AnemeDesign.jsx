import React from 'react'
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpeg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpeg';
import a5 from '../assets/a5.jpeg';
import a6 from '../assets/a6.jpeg';
const AnemeDesign = () => {
  const images = [a1, a2, a3, a4, a5, a6]; // Add all images to an array
  return (
    <div className="bg-black py-12">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
  )
}

export default AnemeDesign