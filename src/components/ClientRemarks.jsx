import React, { useEffect, useRef } from 'react';
import IMAGE from '../assets/author_img.png'; // Ensure this path is correct

const ClientRemarks = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col-reverse sm:flex-row items-center">
          {/* Banner */}
          <div className="absolute top-[-2rem] left-0 right-0 text-center">
            <div className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow-lg inline-block">
              <span className="text-lg font-semibold">Our Client Testimonials</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="sm:w-1/2 p-10 flex justify-center relative">
            <div className="image text-center" ref={imageRef}>
              <div className="relative">
                <img
                  src={IMAGE}
                  alt="Client"
                  className="w-full h-auto max-w-md sm:max-w-lg rounded-lg shadow-lg"
                />
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 rounded-lg animate-overlay"></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="sm:w-1/2 p-5 flex flex-col justify-center">
            <div className="text" ref={textRef}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say{' '}
                <span className="text-indigo-600">About Our Services</span>
              </h2>
              <p className="text-gray-700 text-lg">
                <span>
                  "Working with this Marketing Agency has been an exceptional experience. Their dedication to understanding our needs and delivering results that exceeded our expectations has been truly remarkable. From innovative strategies to impeccable execution, they have become an invaluable partner in our success. Highly recommend their services to anyone looking to elevate their brand!"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Animation Styles */}
      <style>
        {`
          .text,
          .image {
            opacity: 0;
            transform: translateY(50%);
          }
          .animate {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }
          .animate-overlay {
            animation: fadeInOut 5s infinite;
          }
          @keyframes fadeInOut {
            0% { opacity: 0.5; }
            50% { opacity: 0.8; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </section>
  );
};

export default ClientRemarks;
