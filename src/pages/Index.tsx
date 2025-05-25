import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Settings } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-asphalt bg-carbon-fiber opacity-80"></div>
        
        {/* Animated Engine Background Elements */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-racing-red rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/4 w-32 h-32 bg-neon-blue rounded-full opacity-10 blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-16 h-16 text-racing-red" />
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-orbitron text-chrome-silver mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Feel the Power
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-bebas text-metallic-grey mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The V6 Engine Project
            </motion.h2>
            
            {/* Animated Line */}
            <motion.div 
              className="h-1 w-24 bg-racing-red mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link 
                to="/hardware" 
                className="dashboard-button flex items-center hover:shadow-red-glow transition-all duration-300"
              >
                Explore Mechanism <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/demo" 
                className="flex items-center text-chrome-silver hover:text-racing-red transition-all duration-300 font-orbitron"
              >
                <Play className="mr-2 w-5 h-5" /> Watch Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-metallic-grey rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-racing-red rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-metallic-grey mt-2 text-center font-orbitron">SCROLL</p>
        </motion.div>
      </section>
      
      {/* Quick Preview Section */}
      <section className="py-20 bg-dark-asphalt-light blueprint-bg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-orbitron text-chrome-silver mb-4">Engine Components</h2>
            <p className="text-metallic-grey max-w-2xl mx-auto">
              Experience the perfect integration of mechanical precision and innovative design that powers our V6 engine.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Component Preview 1 */}
            <motion.div 
              className="metal-panel p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-40 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/Rh4GDLS1/Chat-GPT-Image-May-26-2025-12-03-52-AM.png" 
                  alt="Pistons" 
                  className="h-32 object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-orbitron text-chrome-silver mt-4">Pistons</h3>
              <p className="text-center text-sm text-metallic-grey mt-2">
                High-performance pistons designed for optimal compression and durability.
              </p>
              <Link 
                to="/hardware" 
                className="mt-4 text-sm text-neon-blue hover:text-racing-red transition-colors flex items-center"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            {/* Component Preview 2 */}
            <motion.div 
              className="metal-panel p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-40 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/Kzy51DMX/Chat-GPT-Image-May-26-2025-12-06-38-AM.png" 
                  alt="Crankshaft" 
                  className="h-32 object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-orbitron text-chrome-silver mt-4">Crankshaft</h3>
              <p className="text-center text-sm text-metallic-grey mt-2">
                Precision-engineered crankshaft for smooth power delivery.
              </p>
              <Link 
                to="/hardware" 
                className="mt-4 text-sm text-neon-blue hover:text-racing-red transition-colors flex items-center"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            {/* Component Preview 3 */}
            <motion.div 
              className="metal-panel p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-40 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/s2g6Vc7T/Detailed-Engine-Model-in-3-D.png" 
                  alt="Combustion Chamber" 
                  className="h-32 object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-orbitron text-chrome-silver mt-4">Combustion</h3>
              <p className="text-center text-sm text-metallic-grey mt-2">
                Advanced combustion chamber design for optimal fuel efficiency.
              </p>
              <Link 
                to="/hardware" 
                className="mt-4 text-sm text-neon-blue hover:text-racing-red transition-colors flex items-center"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            {/* Component Preview 4 */}
            <motion.div 
              className="metal-panel p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-40 flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/c1tsx7c1/Chat-GPT-Image-May-25-2025-11-57-02-PM.png" 
                  alt="Valve System" 
                  className="h-32 object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-orbitron text-chrome-silver mt-4">Valve System</h3>
              <p className="text-center text-sm text-metallic-grey mt-2">
                Precision-timed valve system for optimal engine performance.
              </p>
              <Link 
                to="/hardware" 
                className="mt-4 text-sm text-neon-blue hover:text-racing-red transition-colors flex items-center"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/demo" className="dashboard-button inline-flex items-center hover:shadow-red-glow transition-all duration-300">
              <Play className="mr-2 w-4 h-4" /> See it in action
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
