import React, { useEffect, useRef, useState } from 'react';

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
          setIsInView(true);
        } else {
          setIsInView(false);
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
      id="about"
      ref={sectionRef}
      className={`pt-8 pb-12 bg-white transition-opacity duration-1000 ${
        isInView ? 'opacity-100 animate-slide-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h2 className="inline-block px-4 py-2 bg-blue-50 text-sm sm:text-lg md:text-xl lg:text-2xl font-sans rounded-lg tracking-wider text-black uppercase shadow-sm transition-transform duration-500 hover:scale-105">
            WHY CHOOSE US?
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-gray-900 uppercase">
            DIGITAL <span className="text-blue-700 font-bold">SOLUTIONS</span> WITH VECTOR PRECISION
          </p>
          <p className="mt-4 max-w-md sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            Leveraging the power of digitalization and vector art to deliver precise and innovative solutions tailored to your needs.
          </p>
        </header>

        {/* Content */}
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244356/precision-icon-md.png"
                    alt="Digital Precision icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700 uppercase">
                  Digital Precision
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Achieve unparalleled accuracy and clarity with our cutting-edge digital tools and vector graphics expertise.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <img
                    src="https://th.bing.com/th/id/OIP.TJ9eLPg0DFNpPNcUOB9wgwHaHa?rs=1&pid=ImgDetMain"
                    alt="Seamless Integration icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700 uppercase">
                  Seamless Integration
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Our solutions integrate smoothly with your existing systems, enhancing functionality without disruption.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <img
                    src="https://th.bing.com/th/id/OIP.-TA-hW52-fZjZyzJj-zYHwHaHa?rs=1&pid=ImgDetMain"
                    alt="Cost Efficiency icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700 uppercase">
                  Cost Efficiency
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Benefit from optimized solutions that deliver exceptional value while keeping costs in check.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-2-1/128/Data-Insight-Source-Range-Trending-Analytical-Searching-1024.png"
                    alt="Insightful Analytics icon"
                  />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-blue-700 uppercase">
                  Insightful Analytics
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Harness the power of data with our advanced analytics tools, providing you with actionable insights and clarity.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <style jsx>{`
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
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
