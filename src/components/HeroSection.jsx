import React, { useEffect } from 'react';
import IMAGE1 from '../assets/image1.jpeg';
import IMAGE2 from '../assets/image2.jpg';
import IMAGE3 from '../assets/image3.jpeg';
import IMAGE4 from '../assets/image4.jpg';

const HeroSection = () => {
  useEffect(() => {
    const textElement = document.getElementById('hero-text');
    textElement.classList.add('slide-in');
  }, []);

  return (
    <section id="home" className="relative h-screen  overflow-hidden bg-gray-100">
      {/* Background Images Slideshow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-70 z-0">
        <div className="w-full h-full absolute bg-cover bg-center opacity-30 slide-image" style={{ backgroundImage: `url(${IMAGE1})` }}></div>
        <div className="w-full h-full absolute bg-cover bg-center opacity-30 slide-image" style={{ backgroundImage: `url(${IMAGE2})` }}></div>
        <div className="w-full h-full absolute bg-cover bg-center opacity-30 slide-image" style={{ backgroundImage: `url(${IMAGE3})` }}></div>
        <div className="w-full h-full absolute bg-cover bg-center opacity-30 slide-image" style={{ backgroundImage: `url(${IMAGE4})` }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center bottom-10 justify-center h-full relative z-10 px-4">
        <div id="hero-text" className="text-center md:text-left md:w-1/2 text-white transform opacity-0">
          <h1 className="text-7xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-blue-900">Welcome to Stitches</h1>
          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold">Best Quality</p>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl italic font-bold text-white">
            We provide the best services for digitizing, vector graphics, and more!
          </p>
        </div>

        {/* Get in Touch Button */}
        <div className='mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex md:items-center md:justify-center'>
          <a
            href="#contact"  // Update this href to the appropriate section or contact page
            className="block px-6 py-3 border border-transparent text-base md:text-lg font-semibold text-white bg-slate-400 rounded-md hover:bg-white hover:text-blue-900 transition duration-300"
          >
            Get in Touch
          </a>
          <button className='block px-6 py-3 border border-transparent text-base md:text-lg font-semibold text-white bg-blue-900 rounded-md hover:bg-white hover:text-blue-900 transition duration-300'>
            Learn More!
          </button>
        </div>
      </div>

      {/* Inline Tailwind CSS for animations */}
      <style jsx>{`
        /* Animation for text sliding in from the left */
        .slide-in {
          transform: translateX(-100%);
          opacity: 0;
          animation: slideIn 1s ease-out forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Slideshow effect */
        @keyframes slide {
          0% { opacity: 0; }
          25% { opacity: 1; }
          50% { opacity: 0; }
          75% { opacity: 0; }
          100% { opacity: 0; }
        }

        .slide-image {
          animation: slide 16s infinite;
        }

        .slide-image:nth-child(1) {
          animation-delay: 0s;
        }
        .slide-image:nth-child(2) {
          animation-delay: 4s;
        }
        .slide-image:nth-child(3) {
          animation-delay: 8s;
        }
        .slide-image:nth-child(4) {
          animation-delay: 12s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
