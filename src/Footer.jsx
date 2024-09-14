import { ChevronRight, ChevronUp } from 'lucide-react';
import React from 'react';

import LogoImage from './assets/stitches.png';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export function FooterTwo() {
  return (
    <footer className="w-full mt-8 relative">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-extrabold">
            Subscribe to our <br /> <span className='font-extrabold text-blue-700'>Stitches</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">Stay updated with our latest news and offers.</p>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            />
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li className="hover:text-gray-300"><a href="#home">Home</a></li>
              <li className="hover:text-gray-300"><a href="#about">About</a></li>
              <li className="hover:text-gray-300"><a href="#portfolio">Portfolio</a></li>
              <li className="hover:text-gray-300"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Support</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Live Chat</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img src={LogoImage} alt="DevUI Logo" className="h-20 w-auto rounded-3xl" />
          <span className="ml-4 text-lg">Stitches</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2024 Stitches. All rights reserved.</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://instagram.com" className="text-gray-500 hover:text-gray-700">
              <FaInstagram className="h-6 w-6 transition-transform transform hover:rotate-180" />
            </a>
            <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
              <FaFacebookF className="h-6 w-6 transition-transform transform hover:rotate-180" />
            </a>
            <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
              <FaTwitter className="h-6 w-6 transition-transform transform hover:rotate-180" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating button to scroll to the top */}
      <a href="#top" className="absolute bottom-4 right-4">
        <button
          className="p-3 rounded-full bg-black text-white shadow-md hover:bg-gray-800 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </a>
    </footer>
  );
}
