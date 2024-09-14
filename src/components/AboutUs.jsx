import React, { useEffect, useRef } from 'react';

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Adjust as needed
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
    <section id="about" className="bg-black py-20">
      <div className="animate-bounce relative left-[55%] bg-white top-24 flex justify-center items-center h-16 w-48 text-blue-900 border-separate border-b-8 border-blue-900 text-lg font-bold rounded-full shadow-lg">
        About
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex items-center">
          <div className="sm:w-1/2 p-10 flex justify-center">
            <div
              className="image object-center text-center"
              ref={imageRef}
            >
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="About Us"
                className="w-full h-auto max-w-md sm:max-w-lg" // Increased image size
              />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text" ref={textRef}>
              <span className="text-white border-b-2 text-2xl border-indigo-600 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-white text-7xl sm:text-4xl">
                About <span className="text-indigo-600">Our Stitches Company</span>
              </h2>
              <p className="text-white text-xl">
                <span>
                  At Stitches, we take pride in turning your creative concepts into stunning digital realities. Specializing in Digitizing, Vector Art, Anime Design, and Patches, we transform intricate designs into vibrant, high-quality graphics that stand out. Whether it's a logo, detailed illustration, or custom artwork, our team ensures every design is brought to life with precision, creativity, and professionalism. Let us help bring your vision to reality!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text,
        .image {
          opacity: 0;
          transform: translateY(100%);
        }
        .animate {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0s ease-out, transform 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
