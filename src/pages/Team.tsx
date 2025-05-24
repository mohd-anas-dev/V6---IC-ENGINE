
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Engine Designer',
      expertise: 'Thermodynamics & CAD',
      bio: 'Specialist in high-performance engine design with 8+ years in automotive engineering.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alex@v6engine.com'
    },
    {
      name: 'Sarah Chen',
      role: 'Mechanical Engineer',
      expertise: 'Precision Manufacturing',
      bio: 'Expert in precision machining and quality control with extensive motorsport experience.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah@v6engine.com'
    },
    {
      name: 'Marcus Thompson',
      role: 'Performance Analyst',
      expertise: 'Engine Tuning & Testing',
      bio: 'Performance optimization specialist with deep knowledge of engine dynamics and tuning.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'marcus@v6engine.com'
    },
    {
      name: 'Elena Vasquez',
      role: 'Systems Integration',
      expertise: 'Electronic Control Units',
      bio: 'Electronics and control systems expert specializing in modern engine management systems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'elena@v6engine.com'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M10%2010h80v80H10z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22/%3E%3Cpath%20d%3D%22M20%2020h60v60H20z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.3%22/%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black font-['Orbitron'] text-chrome mb-6">
            ENGINEERING
            <span className="block text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text">
              CREW
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the precision engineers and automotive specialists who brought this V6 masterpiece to life. 
            Each member brings unique expertise from the racing and aerospace industries.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                {/* ID Badge Style Card */}
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-600 shadow-2xl transition-all duration-500 hover:shadow-red-500/20 hover:border-red-500/50 metallic-glint">
                  {/* Badge Header */}
                  <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 border-b border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-['Orbitron'] font-bold tracking-wider">
                        V6 ENGINEERING
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Profile Section */}
                    <div className="flex items-start space-x-6 mb-6">
                      {/* Image Container */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-600 group-hover:border-red-500 transition-colors">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* ID Number */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 font-['Orbitron'] group-hover:text-red-400 transition-colors">
                          {member.name}
                        </h3>
                        <div className="text-red-400 font-semibold mb-1 uppercase tracking-wide text-sm">
                          {member.role}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {member.expertise}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={member.github}
                        className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors group/icon"
                      >
                        <Github className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors group/icon"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-colors group/icon"
                      >
                        <Mail className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Badge Footer */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-2 border-t border-gray-600">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>AUTHORIZED PERSONNEL</span>
                      <span className="font-mono">ID: {String(index + 1).padStart(3, '0')}</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* LED Strip Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron'] text-chrome">
            Team Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Combined Experience', value: '25+', unit: 'Years' },
              { label: 'Projects Completed', value: '50+', unit: 'Engines' },
              { label: 'Racing Wins', value: '12', unit: 'Championships' },
              { label: 'Patents Filed', value: '8', unit: 'Innovations' }
            ].map((stat, index) => (
              <div key={index} className="dashboard-card text-center">
                <div className="text-2xl font-bold text-red-400 font-['Orbitron'] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{stat.unit}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
