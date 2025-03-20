import React from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import LogoImage from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export function FooterTwo() {
  return (
    <footer className="w-full relative bg-gray-900 text-gray-200 pt-12 pb-8">
      {/* Subscribe Section */}
      <div className="flex flex-col m-2 md:flex-row items-center justify-around gap-5 border-b border-gray-700 pb-8">

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">
            Follow<br />
            <span className="text-blue-700">Digitize'NStitch</span><br />
            For more updates
          </h1>
          <p className="mt-4 text-lg">
            Stay updated with our latest news and exclusive offers.
          </p>
        </div>
        {/* Subscription Form */}
        <form className="w-full md:w-1/2  flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-4 mb-4  rounded-md border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          <button
            type="button"
            className="mt-4 sm:mt-0 sm:ml-4 rounded-full bg-blue-600 px-5 py-3 text-white shadow-md transition-all duration-300 hover:bg-blue-500"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </form>
      </div>


      {/* Navigation Links */}
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-4 text-lg font-semibold text-gray-300 uppercase">Company</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-gray-200 transition-colors"><a href="#home">Home</a></li>
              <li className="hover:text-gray-200 transition-colors"><a href="#about">About</a></li>
              <li className="hover:text-gray-200 transition-colors"><a href="#portfolio">Portfolio</a></li>
              <li className="hover:text-gray-200 transition-colors"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-gray-300 uppercase">Support</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-gray-200 transition-colors">Contact Us</li>
              <li className="hover:text-gray-200 transition-colors">Help Center</li>
              <li className="hover:text-gray-200 transition-colors">Community</li>
              <li className="hover:text-gray-200 transition-colors">Live Chat</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold text-gray-300 uppercase">Legal</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-gray-200 transition-colors">About Us</li>
              <li className="hover:text-gray-200 transition-colors">Careers</li>
              <li className="hover:text-gray-200 transition-colors">Press</li>
              <li className="hover:text-gray-200 transition-colors">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom */}
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
        <img src={LogoImage} alt="Stitches Logo" className="h-36 w-28 md:w-48 md:h-44" />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">&copy; 2024 Digitize'NStitch. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a target='_blank' href="https://www.instagram.com/digitizenstitch_?igsh=MTlzN3J5N2xnczhnbA==" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a target='_blank' href="https://www.facebook.com/share/19WE5X4obH/" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a target='_blank' href="https://wa.me/message/ERBPA4SEF47CE1" className="text-gray-400 hover:text-gray-200 transition-colors">
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <a href="#top" className="absolute bottom-4 right-4">
        <button
          className="p-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-500 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </a>
    </footer>
  );
}
