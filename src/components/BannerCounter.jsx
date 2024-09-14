import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaBuilding, FaUsersCog, FaCalendarAlt } from 'react-icons/fa';

const StatsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false); // State to check if the section is in view
  const sectionRef = useRef(null);

  const stats = [
    { icon: FaUsers, label: 'Clients', number: 10000 },
    { icon: FaBuilding, label: 'Branches', number: 500 },
    { icon: FaUsersCog, label: 'Team Members', number: 800 },
    { icon: FaCalendarAlt, label: 'Years of Experience', number: 20 },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
    <div className="bg-gray-100 py-12" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-lg shadow-lg bg-blue-700 transition-transform duration-700 ${
                  isInView ? 'translate-x-0' : 'translate-x-full'
                }`} // Slide effect from right to left
                style={{ transitionDelay: `${index * 0.2}s` }} // Staggered animation
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`transform transition-transform duration-500 ${
                    hoveredIndex === index ? 'rotate-360' : ''
                  }`}
                >
                  <Icon className="text-white text-5xl mx-auto mb-4" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {isInView ? <CountUp end={stat.number} duration={2} /> : 0}
                </h2>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .translate-x-full {
          transform: translateX(200%);
        }

        .translate-x-0 {
          transform: translateX(0);
        }

        .rotate-360 {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
