
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M10%2010h80v80H10z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22/%3E%3Cpath%20d%3D%22M20%2020h60v60H20z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.3%22/%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            PROJECT
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              GENESIS
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the journey from concept to creation of our precision-engineered V6 masterpiece.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              {
                phase: "01",
                title: "Project Inspiration",
                description: "Inspired by a passion for engines and mechanical design.",
                details: "The project started with exploring V6 engine models and experimenting with 3D printing techniques to create a functional scale prototype."
              },
              {
                phase: "02", 
                title: "Design & Research",
                description: "Weeks of FUSION 360 design and iterative prototyping.",
                details: "Research focused on part geometry, material compatibility, and realistic valve movement to achieve smooth mechanical function and visual accuracy."
              },
              {
                phase: "03",
                title: "Hardware Assembly", 
                description: "Careful 3D printing and thoughtful assembly of components.",
                details: "Parts were printed using standard plastic filament with attention to fit, alignment, and smooth mechanical movement during assembly."
              },
              {
                phase: "04",
                title: "Testing & Completion",
                description: "Basic functional testing and motion validation.", 
                details: "The engine's moving parts were tested using a 9V DC motor to ensure smooth rotation, proper alignment, and consistent mechanical motion under repeated operation."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-8">
                  {/* Phase Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                      <span className="text-xl font-bold text-white font-['Orbitron']">
                        {item.phase}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 dashboard-card">
                    <h3 className="text-2xl font-bold text-chrome mb-3 font-['Orbitron']">
                      {item.title}
                    </h3>
                    <p className="text-lg text-red-400 mb-4 font-semibold">
                      {item.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
