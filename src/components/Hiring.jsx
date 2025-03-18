import React from 'react';

const Hiring = () => {
  return (
    <div className="bg-white bg-opacity-50 p-8 rounded-md shadow-md max-w-7xl mx-auto my-8">
      {/* Banner with a Quote */}

      {/* Main Heading */}
        <h1 className="uppercase text-4xl md:text-5xl font-extrabold mb-12 text-center animate-slide-up">
            Benefits Of Hiring <br />
            <span className="text-blue-700">Digitize'NStitch</span>
        </h1>


      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg w-full transform transition-all duration-500 hover:scale-105 hover:bg-blue-100 animate-slide-up">
          <div className="relative mb-6 h-32 w-32 flex items-center justify-center">
            <div className="absolute h-full w-full border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
            <div className="relative h-24 w-24 rounded-md bg-primary-500 text-white flex items-center justify-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-2-1/128/Data-Insight-Source-Range-Trending-Analytical-Searching-1024.png"
                alt="Fast Turnaround"
                className="h-20 w-20"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Fast Turnaround</h2>
          <p className="text-sm md:text-base">
            We have quick turnaround time for digitizing and designing. Get your design digitized quickly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg w-full transform transition-all duration-500 hover:scale-105 hover:bg-blue-100 animate-slide-up">
          <div className="relative mb-6 h-32 w-32 flex items-center justify-center">
            <div className="absolute h-full w-full border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
            <div className="relative h-24 w-24 rounded-md bg-primary-500 text-white flex items-center justify-center">
              <img
                src="https://th.bing.com/th/id/OIP.fb0-Z_59AFohOEBJoXx1kwHaHa?rs=1&pid=ImgDetMain"
                alt="Quality Assurance"
                className="h-20 w-20"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Quality Assurance</h2>
          <p className="text-sm md:text-base">
            We have a strict quality check process. Each design has to pass different phases of quality assurance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg w-full transform transition-all duration-500 hover:scale-105 hover:bg-blue-100 animate-slide-up">
          <div className="relative mb-6 h-32 w-32 flex items-center justify-center">
            <div className="absolute h-full w-full border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
            <div className="relative h-24 w-24 rounded-md bg-primary-500 text-white flex items-center justify-center">
              <img
                src="https://www.ctcpas.org/storage/files/d7580c815bccc881d4cd021e6da84090.png"
                alt="Customer Support"
                className="h-20 w-20"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Customer Support</h2>
          <p className="text-sm md:text-base">
            We have a friendly support team who are experts in their relevant fields, ready to assist you.
          </p>
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        /* Slide Up Animation */
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default Hiring;
