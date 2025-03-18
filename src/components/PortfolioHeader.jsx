import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const PortfolioHeader = () => {
  const location = useLocation();

  return (
    <section id="portfolio" className="py-6">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <NavLink
          to="/digitizing"
          className={({ isActive }) =>
            "w-full sm:w-auto px-6 py-3 font-bold text-base sm:text-lg md:text-xl uppercase transition-colors duration-300 text-center border-b-4 " +
            ((isActive || location.pathname === "/") 
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-800 hover:border-blue-600 hover:text-blue-600")
          }
        >
          Digitizing
        </NavLink>
        <NavLink
          to="/vectorArt"
          className={({ isActive }) =>
            "w-full sm:w-auto px-6 py-3 font-bold text-base sm:text-lg md:text-xl uppercase transition-colors duration-300 text-center border-b-4 " +
            (isActive
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-800 hover:border-blue-600 hover:text-blue-600")
          }
        >
          Vector Art
        </NavLink>
        <NavLink
          to="/patches"
          className={({ isActive }) =>
            "w-full sm:w-auto px-6 py-3 font-bold text-base sm:text-lg md:text-xl uppercase transition-colors duration-300 text-center border-b-4 " +
            (isActive
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-800 hover:border-blue-600 hover:text-blue-600")
          }
        >
          Patches
        </NavLink>
        <NavLink
          to="/AnemeDesign"
          className={({ isActive }) =>
            "w-full sm:w-auto px-6 py-3 font-bold text-base sm:text-lg md:text-xl uppercase transition-colors duration-300 text-center border-b-4 " +
            (isActive
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-800 hover:border-blue-600 hover:text-blue-600")
          }
        >
          Aneme Design
        </NavLink>
      </div>
    </section>
  );
};

export default PortfolioHeader;
