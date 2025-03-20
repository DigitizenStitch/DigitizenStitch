import React, { useEffect, useRef } from 'react';

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
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
    <section id="about" className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block px-6 py-4 bg-blue-50 text-xl sm:text-2xl font-sans rounded-lg tracking-wider text-black uppercase shadow-sm transition-transform duration-500 hover:scale-105">
            About
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Image */}
          <div className="md:w-1/2 p-6 flex justify-center">
            <div className="image object-center text-center" ref={imageRef}>
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="About Us"
                className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="md:w-1/2 p-6">
            <div className="text" ref={textRef}>
              <span className="text-gray-900 border-b-2 text-xl sm:text-2xl border-blue-900 uppercase">
                About Us
              </span>
              <h2 className="my-4 font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase">
                ABOUT <span className="text-blue-700 uppercase">OUR DIGITIZE'NSTITCH COMPANY</span>
              </h2>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                At <b>Digitize'NStitch</b>, we take pride in turning your creative concepts into stunning digital realities.
                Specializing in Digitizing, Vector Art, Anime Design, and Patches, we transform intricate designs
                into vibrant, high-quality graphics that stand out. Whether it's a logo, detailed illustration, or custom artwork,
                our team ensures every design is brought to life with precision, creativity, and professionalism.
                Let us help bring your vision to reality!
                <br /><br />
                <span className="mt-6 flex flex-col space-y-2 text-sm sm:text-base md:text-lg xl:text-xl">
                  <span className="flex items-center">
                    <span className="bg-blue-900 text-white font-bold rounded-full p-1 mr-2 text-lg">✓</span>
                    Award Winning Quality.
                  </span>
                  <span className="flex items-center">
                    <span className="bg-blue-900 text-white font-bold rounded-full p-1 mr-2 text-lg">✓</span>
                    Live Expert Customer Service.
                  </span>
                  <span className="flex items-center">
                    <span className="bg-blue-900 text-white font-bold rounded-full p-1 mr-2 text-lg">✓</span>
                    24 Hours Turnaround Standard.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for fade-in up animation */}
      <style jsx>{`
        .text,
        .image {
          opacity: 0;
          transform: translateY(20px);
        }
        .animate {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
