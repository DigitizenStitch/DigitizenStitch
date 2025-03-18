import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LOGO from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsDropdownOpen(false);
  };

  // Example function to determine active link based on scroll position
  // In a real implementation, you'd add scroll event listeners and update state accordingly
  const activeLink = ""; // hardcoded for demonstration

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-blue-950 text-white p-6 h-20 fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start p-4">
      <a href="#home" className="flex items-center">
      <img
        src={LOGO}
        alt="Logo"
        className=" w-32 md:w-40 object-contain p-2"
      />


      </a>
    </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 items-center justify-center flex-grow text-lg">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className={`transition-colors duration-200 hover:text-gray-300 ${
                  activeLink === item.href ? "text-gray-300" : ""
                }`}
              >
                {item.label}
              </a>
              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  activeLink === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-200 transform hover:scale-105"
          >
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full bg-blue-900 p-4 absolute top-20 left-0`}
      >
        {navItems.map((item) => (
          <li key={item.href} className="py-2 hover:text-gray-300 transition-colors duration-200">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
