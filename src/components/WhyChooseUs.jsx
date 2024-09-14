import React, { useRef, useEffect, useState } from 'react';

const WhyChooseUs = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger the animation when in view
        } else {
          setIsInView(false); // Reset the animation when out of view
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`pt-8 pb-12 bg-white ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <header className="text-center">
          <h2 className="bg-blue-100 animate-bounce px-6 py-4 text-xl font-sans rounded-lg md:w-64 md:mx-auto tracking-widest text-black uppercase">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-5xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Digital <span className='text-blue-700 font-bold text-4xl'>Solutions</span> with Vector Precision
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            Leveraging the power of digitalization and vector art to deliver precise and innovative solutions tailored to your needs.
          </p>
        </header>

        {/* Content with animation */}
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244356/precision-icon-md.png"
                    alt="Digital Precision icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700">Digital Precision</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Achieve unparalleled accuracy and clarity with our cutting-edge digital tools and vector graphics expertise.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img
                    src="https://th.bing.com/th/id/OIP.TJ9eLPg0DFNpPNcUOB9wgwHaHa?rs=1&pid=ImgDetMain"
                    alt="Seamless Integration icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700">Seamless Integration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our solutions integrate smoothly with your existing systems, enhancing functionality without disruption.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img
                    src="https://th.bing.com/th/id/OIP.-TA-hW52-fZjZyzJj-zYHwHaHa?rs=1&pid=ImgDetMain"
                    alt="Cost Efficiency icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700">Cost Efficiency</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Benefit from optimized solutions that deliver exceptional value while keeping costs in check.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-2-1/128/Data-Insight-Source-Range-Trending-Analytical-Searching-1024.png"
                    alt="Insightful Analytics icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700">Insightful Analytics</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Harness the power of data with our advanced analytics tools, providing you with actionable insights and clarity.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <style jsx>{`
        /* Animation for sliding in from the bottom */
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

        /* Apply animation to header and content */
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
