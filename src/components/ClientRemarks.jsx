import React, { useEffect, useState } from 'react';

const ClientRemarks = () => {
  const testimonials = [
    {
      quote:
        "Working with Stitches transformed our branding. Their creative execution and attention to detail are unmatched.",
      name: "John Smith",
      title: "CEO, XYZ Innovations",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      quote:
        "Their digital precision and vector expertise elevated our product design to new heights.",
      name: "Mary Johnson",
      title: "Creative Director, ABC Inc.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      quote:
        "I was impressed by their swift turnaround and commitment to quality. Highly recommended.",
      name: "David Lee",
      title: "Founder, Startup Co.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      quote:
        "Their innovative digital solutions gave us a competitive edge in a saturated market.",
      name: "Linda Kim",
      title: "Marketing Manager, Global Brands",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide">
          CLIENTS <span className="text-blue-700">SATISFACTION</span>
        </h2>
        <div className="relative w-full h-auto min-h-[300px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex justify-center items-center px-4 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-lg italic text-gray-600 mb-6">
                  "{testimonial.quote}"
                </p>
                <p className="text-xl font-bold text-gray-800 uppercase">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientRemarks;
