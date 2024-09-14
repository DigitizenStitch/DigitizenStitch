import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LOGO from '../assets/stitches.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-blue-950 text-white p-6 h-20 fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src={LOGO}
              alt="Logo"
              className="w-20 h-20 object-contain rounded-2xl" 
            />
          </a>
        </div>

        {/* Menu Items (centered for larger screens) */}
        <ul className="hidden md:flex md:space-x-8 items-center justify-center flex-grow text-xl font-bold">
          <li className="hover:text-gray-300 text-xl font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">About</a>
          </li>
          <li className="relative hover:text-gray-300">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-300 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 p-2 bg-gray-700 rounded shadow-lg">
                <li className="hover:text-gray-300 py-1">
                  <a href="#digitizing">Digitizing</a>
                </li>
                <li className="hover:text-gray-300 py-1">
                  <a href="#vector">Vector</a>
                </li>
                <li className="hover:text-gray-300 py-1">
                  <a href="#pushes">Pushes</a>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu (for smaller screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Items (for smaller screens) */}
      <ul
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} 
        w-full bg-blue-900 p-4 absolute top-20 left-0`}
      >
        <li className="hover:text-gray-300 py-2">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-300 py-2">
          <a href="#about">About</a>
        </li>
        <li className="relative hover:text-gray-300 py-2">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-gray-300 focus:outline-none"
          >
            Services
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 p-2 bg-gray-700 rounded shadow-lg">
              <li className="hover:text-gray-300 py-1">
                <a href="#digitizing">Digitizing</a>
              </li>
              <li className="hover:text-gray-300 py-1">
                <a href="#vector">Vector</a>
              </li>
              <li className="hover:text-gray-300 py-1">
                <a href="#pushes">Pushes</a>
              </li>
            </ul>
          )}
        </li>
        <li className="hover:text-gray-300 py-2">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-gray-300 py-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
