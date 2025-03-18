import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaProjectDiagram, FaUsersCog, FaCalendarAlt } from 'react-icons/fa';

const StatsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: FaUsers, label: 'Clients', number: 10000 },
    { icon: FaProjectDiagram, label: 'Projects', number: 120 },
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
    <div ref={sectionRef} className="py-12 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`text-center p-6 rounded-lg shadow-lg bg-blue-700 transition-transform duration-700 hover:scale-105 ${
                isInView ? 'visible-stat' : 'hidden-stat'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="transform transition-transform duration-500">
                <Icon className="text-white text-5xl mx-auto mb-4" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {isInView ? <CountUp end={stat.number} duration={2} /> : 0}+
              </h2>
              <p className="text-gray-200 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  
    {/* New Animation Styles */}
    <style jsx>{`
      .hidden-stat {
        opacity: 0;
        transform: scale(0.8);
      }
      .visible-stat {
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
      }
    `}</style>
  </div>  
  );
};

export default StatsSection;
