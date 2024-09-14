import React, { useEffect, useState } from 'react';

const MeetOurTeam = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger sliding animation when component is mounted
    setSlideIn(true);
  }, []);

  const teamMembers = [
    {
      name: 'Digitizer',
      description: 'Expert in converting designs into digital format.',
      image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Manager',
      description: 'Ensures smooth operations and project management.',
      image: 'https://thumbs.dreamstime.com/b/smiling-businessman-arms-crossed-his-desk-office-49235982.jpg',
    },
    {
      name: 'Designer',
      description: 'Creative and skilled in various design tools.',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Senior Designer',
      description: 'Leads the design team with experience and vision.',
      image: 'https://i.pinimg.com/originals/48/89/5d/48895dccb7534cb80c651153794f2b6b.jpg',
    },
  ];

  return (
    <div className="py-8">
      {/* Oval shape with "Our Team" text */}
      <div className="flex justify-center mb-4">
        <div className="animate-pulse flex justify-center items-center h-16 w-48 text-blue-900 border-separate border-b-8 border-blue-900 text-lg font-bold rounded-full shadow-lg">
          Our Team
        </div>
      </div>

      {/* Main heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">
          Meet Our <span className="text-blue-900">Stitchy</span>
          <br />
          Members
        </h1>
      </div>

      {/* Display the team members below the heading */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative h-[400px] w-[300px] rounded-md overflow-hidden group transform transition duration-500 ease-in-out 
            ${slideIn ? `translate-x-0 opacity-100` : `translate-x-20 opacity-0`} 
            hover:scale-105 hover:shadow-lg`}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered slide-in effect
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition duration-300 ease-in-out"></div>
            <div className="absolute bottom-4 left-4 text-left z-10">
              <h1 className="text-lg font-semibold text-white group-hover:text-white transition duration-300 ease-in-out">
                {member.name}
              </h1>
              <p className="mt-2 text-sm text-white group-hover:text-white transition duration-300 ease-in-out">
                {member.description}
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
