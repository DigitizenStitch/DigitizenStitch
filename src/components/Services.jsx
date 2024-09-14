import React from 'react';
import { FaPencilAlt, FaVectorSquare, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="animate-bounce relative left-[43%] flex justify-center items-center h-16 w-48 text-blue-900 border-separate border-b-8 border-blue-900 text-lg font-bold rounded-full shadow-lg">
        Service
      </div>
      <div className="container mx-auto text-center animate-slide-in">
        <br />
        <h2 className="text-5xl font-bold text-black">What We Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-black hover:text-white duration-300" style={{ minHeight: '400px' }}>
            <FaPencilAlt className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Digitizing</h3>
            <p className="mt-4 text-lg">
              We offer high-quality digitizing services for embroidery and more. Our team uses advanced technology and techniques to ensure that your designs are accurately transformed into high-resolution digital formats, providing exceptional results and clarity.
            </p>
            <Link
              href="/digitizing"
              className="mt-6 block px-4 py-2 bg-white text-black italic rounded text-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-black hover:text-white duration-300" style={{ minHeight: '400px' }}>
            <FaVectorSquare className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Vector Graphics</h3>
            <p className="mt-4 text-lg">
              Professional vector graphics for your design needs. We create scalable and versatile vector designs that are perfect for various applications, from digital media to print. Our expertise ensures that every detail is sharp and precise, enhancing your visual communication.
            </p>
            <Link
              to="/digitizing"
              className="mt-6 block px-4 py-2 bg-white text-black italic rounded text-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-black hover:text-white duration-300" style={{ minHeight: '400px' }}>
            <FaBell className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">Pushes</h3>
            <p className="mt-4 text-lg">
              Custom push notifications and more. We design and implement tailored push notification solutions to engage your audience effectively. Our services include creating notifications that are timely, relevant, and aligned with your marketing strategies to maximize impact.
            </p>
            <Link
              to="#"
              className="mt-6 block px-4 py-2 bg-white text-black italic rounded text-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
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
