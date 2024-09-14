import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 lg:flex lg:flex-col lg:space-y-4 lg:top-[35%] lg:left-4 lg:transform-none lg:-translate-y-0">
      {/* Box Container */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-slate-500 hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-slate-500 hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-slate-500 hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-slate-500 hover:text-blue-700 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
