// PortfolioHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioHeader = () => {
  return (
    <section id="portfolio">
      <div className="flex justify-center items-center gap-4 flex-wrap py-6">
        <Link
          to="/digitaizing"
          className=" font-bold border-2 border-blue-600 border-separate border-b-8 rounded-fullborder-2 border-transparent rounded-full p-3 transition-all duration-300 ease-in-out hover:border-blue-600 hover:text-blue-600 hover:font-semibold text-lg md:text-xl lg:text-2xl text-gray-800"
        >
          Digitaizing
        </Link>
        <Link
          to="/vectorArt"
          className=" font-bold border-2 border-blue-600 border-separate border-b-8 rounded-fullborder-2 border-transparent rounded-full p-3 transition-all duration-300 ease-in-out hover:border-blue-600 hover:text-blue-600 hover:font-semibold text-lg md:text-xl lg:text-2xl text-gray-800"
        >
          VectorArt
        </Link>
        <Link
          to="/patches"
          className=" font-bold border-2 border-blue-600 border-separate border-b-8 rounded-full  p-3 transition-all duration-300 ease-in-out hover:border-blue-600 hover:text-blue-600 hover:font-semibold text-lg md:text-xl lg:text-2xl text-gray-800"
        >
          Patches
        </Link>
        <Link
          to="/AnemeDesign"
          className=" font-bold border-2 border-blue-600 border-separate border-b-8 rounded-full border-transparent  p-3 transition-all duration-300 ease-in-out hover:border-blue-600 hover:text-blue-600 hover:font-semibold text-lg md:text-xl lg:text-2xl text-gray-800"
        >
          AnemeDesign
        </Link>
      </div>
    </section>
  );
};

export default PortfolioHeader;
