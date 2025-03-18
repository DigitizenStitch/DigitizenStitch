import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-20">
    <div className="container mx-auto text-center">
    <h2 className="animate-slide-up text-4xl sm:text-5xl font-bold text-gray-900 uppercase tracking-wide">
            Our <span className="text-blue-700">Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Check out our recent work in digitizing, vector graphics, and more.
          </p>
      {/* Add portfolio items here */}
    </div>
  </section>
  )
}

export default Portfolio