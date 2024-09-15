import React, { useEffect, useRef } from 'react';
import ACC1 from '../assets/acc1.png';
import ACC2 from '../assets/acc2.png';
import ACC3 from '../assets/acc3.png';
import ACC4 from '../assets/acc4.png';
import ACC5 from '../assets/acc5.png';

const Carousel = () => {
  const images = [ACC1, ACC2, ACC3, ACC4, ACC5];
  const carouselRef = useRef(null);

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          carouselRef.current.style.transform = 'translateX(0)';
          carouselRef.current.style.opacity = '1';
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      carouselRef.current.style.transform = 'translateX(-100%)';
      carouselRef.current.style.opacity = '0';
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center h-auto mb-20 bg-black py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center mt-8 text-white">
        Payment <br />
        <span className="text-blue-900">Method</span>
      </h2>

      <div
        ref={carouselRef}
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-1000 ease-in-out"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <div key={index} className="p-2 flex justify-center items-center">
              <img
                src={image}
                alt={`carousel slide ${index}`}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
