import React, { useEffect, useRef, useState } from 'react';
import { FaPencilAlt, FaVectorSquare, FaBell } from 'react-icons/fa';

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 bg-white transition-opacity duration-1000 ${
        isInView ? 'opacity-100 animate-slide-in' : 'opacity-0'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="inline-block px-6 py-4 bg-blue-50 text-xl md:text-2xl font-sans rounded-lg tracking-wider text-black uppercase shadow-sm transition-transform duration-500 hover:scale-105">
          SERVICES
        </h2>
      </div>
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 uppercase">
          WHAT <span className="text-blue-700">WE</span> DO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 min-h-[350px] flex flex-col justify-center">
            <div className="mb-4">
              <FaPencilAlt className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Digitizing</h3>
            <p className="text-lg">
              We provide high-quality digitizing services, ensuring your designs are transformed into high-resolution digital formats with precision.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 min-h-[350px] flex flex-col justify-center">
            <div className="mb-4">
              <FaVectorSquare className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Vector Graphics</h3>
            <p className="text-lg">
              Our expertise in vector graphics delivers scalable, versatile designs that are perfect for digital media and print with outstanding precision.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 min-h-[350px] flex flex-col justify-center">
            <div className="mb-4">
              <FaBell className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4">Push Notifications</h3>
            <p className="text-lg">
              We craft custom push notification solutions that engage your audience effectively, ensuring timely and relevant communication.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(200px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
