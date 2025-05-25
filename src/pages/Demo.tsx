
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Gauge } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [rpm, setRpm] = useState(0);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Simulate RPM increase/decrease
    if (!isPlaying) {
      let currentRpm = 0;
      const interval = setInterval(() => {
        currentRpm += 500;
        if (currentRpm > 4000) {
          clearInterval(interval);
          return;
        }
        setRpm(currentRpm);
      }, 500);
    } else {
      let currentRpm = rpm;
      const interval = setInterval(() => {
        currentRpm -= 500;
        if (currentRpm <= 0) {
          clearInterval(interval);
          currentRpm = 0;
          return;
        }
        setRpm(currentRpm);
      }, 300);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Calculate RPM gauge rotation
  const rpmRotation = (rpm / 8000) * 270 - 135; // -135 to 135 degrees
  
  return (
    <div className="page-container">
      {/* Page Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-orbitron text-chrome-silver mb-4">Engine Demo</h1>
        <div className="h-1 w-24 bg-racing-red mx-auto mb-6"></div>
        <p className="text-metallic-grey max-w-2xl mx-auto">
          Watch our V6 engine in action with this interactive demonstration. Start the engine to see the components working in perfect harmony.
        </p>
      </motion.div>
      
      {/* Demo Section */}
      <section className="mb-16">
        <div className="bg-dark-asphalt-light border border-metallic-grey rounded-lg overflow-hidden">
          {/* Video Container */}
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* Placeholder for video - in a real implementation, this would be a video */}
            <div className="absolute inset-0 flex items-center justify-center bg-engine-black">
              <img 
                src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Engine Demonstration" 
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Center play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-racing-red bg-opacity-80 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                  >
                    <Play className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
              )}
              
              {/* Engine running animation overlay */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 bg-racing-red opacity-10"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                />
              )}
            </div>
          </div>
          
          {/* Controls */}
          <div className="p-4 carbon-fiber-bg">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay} 
                className="dashboard-button flex items-center"
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" /> Stop Engine
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" /> Start Engine
                  </>
                )}
              </button>
              
              {/* Sound Toggle */}
              <button 
                onClick={toggleMute} 
                className="p-2 text-metallic-grey hover:text-racing-red transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              
              {/* RPM Gauge */}
              <div className="flex-grow flex justify-end items-center">
                <div className="relative w-32 h-16">
                  {/* Gauge background */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-t-full overflow-hidden border-t border-l border-r border-metallic-grey bg-engine-black"></div>
                  
                  {/* RPM tick marks */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-1 h-2 bg-metallic-grey"
                      style={{
                        left: `${14 + i * 9}%`,
                        top: '15%',
                      }}
                    ></div>
                  ))}
                  
                  {/* RPM labels */}
                  <div className="absolute left-2 top-4 text-[8px] text-metallic-grey">0</div>
                  <div className="absolute right-2 top-4 text-[8px] text-metallic-grey">8k</div>
                  <div className="absolute left-1/2 top-1 -translate-x-1/2 text-[8px] text-metallic-grey">4k</div>
                  
                  {/* Gauge needle */}
                  <motion.div 
                    className="absolute left-1/2 top-[80%] w-[1px] h-10 bg-racing-red origin-bottom"
                    style={{ rotate: `${rpmRotation}deg` }}
                    initial={{ rotate: -135 }}
                  ></motion.div>
                  
                  {/* Gauge center */}
                  <div className="absolute left-1/2 top-[80%] w-3 h-3 rounded-full bg-engine-black border border-metallic-grey -translate-x-1/2"></div>
                  
                  {/* RPM digital readout */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 font-orbitron text-neon-blue text-sm flex items-center">
                    <Gauge className="w-4 h-4 mr-1" />
                    {rpm.toLocaleString()} RPM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Engine Specs */}
      <section>
        <h2 className="section-title">Performance Specifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-orbitron text-racing-red mb-2">280 HP</h3>
            <p className="text-sm text-metallic-grey">Maximum Power @ 6500 RPM</p>
            <div className="w-full h-2 bg-engine-black mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-racing-red"
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-orbitron text-neon-blue mb-2">350 Nm</h3>
            <p className="text-sm text-metallic-grey">Maximum Torque @ 4000 RPM</p>
            <div className="w-full h-2 bg-engine-black mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-neon-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-orbitron text-performance-yellow mb-2">10.5:1</h3>
            <p className="text-sm text-metallic-grey">Compression Ratio</p>
            <div className="w-full h-2 bg-engine-black mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-performance-yellow"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-orbitron text-chrome-silver mb-2">7500 RPM</h3>
            <p className="text-sm text-metallic-grey">Redline</p>
            <div className="w-full h-2 bg-engine-black mt-4 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-chrome-silver"
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Performance Graph - Simplified Version */}
        <motion.div 
          className="mt-12 p-6 metal-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-orbitron text-chrome-silver mb-6">Power & Torque Curve</h3>
          
          <div className="h-64 relative bg-dark-asphalt rounded-lg p-4">
            {/* Y-axis label */}
            <div className="absolute -left-10 top-1/2 -rotate-90 text-xs text-metallic-grey">Power / Torque</div>
            
            {/* X-axis label */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-metallic-grey mt-2">RPM (x1000)</div>
            
            {/* X-axis ticks */}
            <div className="absolute left-0 right-0 bottom-0 flex justify-between px-4">
              {[1, 2, 3, 4, 5, 6, 7].map((tick) => (
                <div key={tick} className="text-[10px] text-metallic-grey">{tick}</div>
              ))}
            </div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="border-b border-r border-engine-black"></div>
              ))}
            </div>
            
            {/* Power Curve */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,90 C10,80 20,70 30,50 C40,30 50,20 70,10 C80,5 90,10 100,20" 
                fill="none" 
                stroke="#FF2E2E" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
              <circle cx="70" cy="10" r="2" fill="#FF2E2E" />
            </svg>
            
            {/* Torque Curve */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,70 C10,50 20,30 30,20 C40,15 50,15 70,30 C80,40 90,50 100,60" 
                fill="none" 
                stroke="#00BFFF" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <circle cx="30" cy="20" r="2" fill="#00BFFF" />
            </svg>
            
            {/* Legend */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-racing-red mr-2"></div>
                <span className="text-xs text-metallic-grey">Power</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neon-blue mr-2"></div>
                <span className="text-xs text-metallic-grey">Torque</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DemoPage;
