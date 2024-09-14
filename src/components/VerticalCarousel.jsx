import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import IMAGE5 from '../assets/image5.png';
import IMAGE6 from '../assets/image6.png';
import IMAGE7 from '../assets/image7.png';
import IMAGE8 from '../assets/image8.png';
import IMAGE10 from '../assets/image10.png';

const Carousel = () => {
  const images = [IMAGE6, IMAGE5, IMAGE7, IMAGE8, IMAGE10];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 4;
  const carouselRef = useRef(null);

  // Scroll Animation - triggers when carousel scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          carouselRef.current.style.transform = 'translateX(0)';
          carouselRef.current.style.opacity = '1'; // Fades in as it slides
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (carouselRef.current) {
      carouselRef.current.style.transform = 'translateX(-100%)'; // Start off-screen
      carouselRef.current.style.opacity = '0'; // Hidden initially
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - imagesPerSlide;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center mt-8">
        We Use <br />
        <span className="text-blue-900">Software</span>
      </h2>

      <div
        ref={carouselRef} // Ref for the scroll-in animation
        className="relative w-full max-w-4xl overflow-hidden flex items-center justify-between transition-transform duration-1000 ease-in-out"
      >
        {/* Left button */}
        <button
          onClick={handlePrevious}
          className="bg-gray-800 text-white px-4 py-2 rounded-l-md hover:bg-gray-700 flex items-center justify-center"
        >
          <AiOutlineLeft size={30} />
        </button>

        {/* Carousel images */}
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${images.length * 100 / imagesPerSlide}%`,
              transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`carousel slide ${index}`}
                className="w-1/4 h-auto object-cover"
              />
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 flex items-center justify-center"
        >
          <AiOutlineRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
