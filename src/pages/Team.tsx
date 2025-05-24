
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, PenTool, LineChart, Users, Github, Linkedin, Mail } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Lead Engineer",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      expertise: "Mechanical Design",
      icon: <Wrench className="h-5 w-5" />,
      bio: "Alex specializes in precision mechanical design with over 10 years of experience in automotive engineering."
    },
    {
      name: "Sara Chen",
      role: "Electronics Specialist",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      expertise: "Control Systems",
      icon: <Cpu className="h-5 w-5" />,
      bio: "Sara develops the electronic control systems that monitor and regulate engine performance."
    },
    {
      name: "Marcus Williams",
      role: "CAD Designer",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      expertise: "3D Modeling",
      icon: <PenTool className="h-5 w-5" />,
      bio: "Marcus creates precise 3D models and technical drawings for all engine components."
    },
    {
      name: "Jasmine Patel",
      role: "Performance Analyst",
      photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      expertise: "Efficiency Optimization",
      icon: <LineChart className="h-5 w-5" />,
      bio: "Jasmine analyzes performance data to optimize efficiency and power delivery of the engine."
    }
  ];

  return (
    <div className="page-container">
      {/* Page Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-orbitron text-chrome-silver mb-4">Meet The Team</h1>
        <div className="h-1 w-24 bg-racing-red mx-auto mb-6"></div>
        <p className="text-metallic-grey max-w-2xl mx-auto">
          The brilliant minds behind the V6 Engine Project, combining expertise in mechanical engineering, electronics, design, and performance analysis.
        </p>
      </motion.div>
      
      {/* Team Overview */}
      <section className="mb-16">
        <motion.div 
          className="metal-panel p-8 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <Users className="w-24 h-24 text-neon-blue" />
              <div className="absolute inset-0 bg-neon-blue opacity-20 blur-xl rounded-full"></div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-orbitron text-chrome-silver mb-4">Collaborative Excellence</h2>
            <p className="text-metallic-grey mb-4">
              Our team brings together diverse expertise from various engineering disciplines. We operate like a well-tuned engine ourselves, with each member playing a crucial role in the successful development of our V6 engine model.
            </p>
            <p className="text-metallic-grey">
              Through collaboration, innovation, and dedication, we've created a project that pushes the boundaries of educational engineering demonstrations.
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Team Members */}
      <section>
        <h2 className="section-title">Core Team Members</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Team Member Card styled like a garage work tag */}
              <div className="relative overflow-hidden rounded-lg border-2 border-metallic-grey">
                {/* Photo */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-engine-black to-transparent opacity-70"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-racing-red text-white mr-3">
                      {member.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron text-chrome-silver">{member.name}</h3>
                      <p className="text-xs text-neon-blue font-orbitron">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-metallic-grey mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-metallic-grey">
                        <span className="text-chrome-silver font-orbitron">Expertise:</span> {member.expertise}
                      </p>
                      <div className="flex space-x-2">
                        <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Reveal Bio */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-engine-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-xl font-orbitron text-chrome-silver mb-2">{member.name}</h3>
                    <p className="text-sm text-neon-blue mb-4">{member.role}</p>
                    <p className="text-metallic-grey">{member.bio}</p>
                    <div className="mt-4 flex justify-center space-x-3">
                      <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-metallic-grey hover:text-racing-red transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
