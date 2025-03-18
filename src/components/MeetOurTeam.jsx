import React, { useEffect, useState } from 'react';

const MeetOurTeam = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger sliding animation when component is mounted
    setSlideIn(true);
  }, []);

  // const teamMembers = [
  //   {
  //     name: 'Digitizer',
  //     description: 'Expert in converting designs into digital format.',
  //     image:
  //       'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  //   },
  //   {
  //     name: 'Manager',
  //     description: 'Ensures smooth operations and project management.',
  //     image:
  //       'https://thumbs.dreamstime.com/b/smiling-businessman-arms-crossed-his-desk-office-49235982.jpg',
  //   },
  //   {
  //     name: 'Designer',
  //     description: 'Creative and skilled in various design tools.',
  //     image:
  //       'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  //   },
  //   {
  //     name: 'Senior Designer',
  //     description: 'Leads the design team with experience and vision.',
  //     image:
  //       'https://i.pinimg.com/originals/48/89/5d/48895dccb7534cb80c651153794f2b6b.jpg',
  //   },
  // ];

  // return (
  //   <section className="py-8">
  //     {/* Oval shape with "Our Team" text */}
  //     <div className="text-center mb-12">
  //       <h2 className="inline-block px-6 py-4 bg-blue-50 text-xl md:text-2xl font-sans rounded-lg tracking-wider text-black uppercase shadow-sm transition-transform duration-500 hover:scale-105">
  //         our team
  //       </h2>
  //     </div>

  //     {/* Main heading */}
  //     <div className="text-center mb-8 px-4">
  //       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
  //         Meet Our <span className="text-blue-700">Stitchy</span> Members
  //       </h1>
  //     </div>

  //     {/* Team members grid */}
  //     <div className="flex flex-wrap justify-center gap-8 px-4">
  //       {teamMembers.map((member, index) => (
  //         <div
  //           key={index}
  //           className={`relative bg-white rounded-md overflow-hidden group transform transition duration-500 ease-in-out 
  //             ${slideIn ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
  //             hover:scale-105 hover:shadow-xl`}
  //           style={{ transitionDelay: `${index * 100}ms` }}
  //         >
  //           <img
  //             src={member.image}
  //             alt={member.name}
  //             className="w-full h-80 sm:h-80 md:h-96 object-cover transition duration-300 ease-in-out"
  //           />
  //           <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition duration-300 ease-in-out"></div>
  //           <div className="absolute bottom-4 left-4 z-10 text-left">
  //             <h1 className="text-xl font-semibold text-white uppercase group-hover:text-white transition duration-300 ease-in-out">
  //               {member.name}
  //             </h1>
  //             <p className="mt-2 text-sm text-white group-hover:text-white transition duration-300 ease-in-out">
  //               {member.description}
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default MeetOurTeam;
