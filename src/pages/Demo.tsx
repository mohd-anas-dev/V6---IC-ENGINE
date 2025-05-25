import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Gauge } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        // Store current time when pausing
        setCurrentTime(videoRef.current.currentTime);
        videoRef.current.pause();
      } else {
        // Resume from stored time
        videoRef.current.currentTime = currentTime;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Reset video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };
  
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
          <div className="relative w-full h-[600px]">
            <video
              ref={videoRef}
              className={`w-full h-full object-cover ${!isPlaying ? 'hidden' : ''}`}
              src="/V6-IC-ENGINE.mp4"
              poster="/Thumbnail.png"
              loop
              muted={isMuted}
              onEnded={handleVideoEnd}
            />
            {!isPlaying && (
              <img 
                src="/Thumbnail.png" 
                alt="Engine Thumbnail" 
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            )}
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
            <h3 className="text-xl font-orbitron text-racing-red mb-2">12V DC</h3>
            <p className="text-sm text-metallic-grey">12V DC motor-driven rotation at 100 RPM</p>
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
            <h3 className="text-xl font-orbitron text-neon-blue mb-2">-----</h3>
            <p className="text-sm text-metallic-grey">Motor torque simulated at nominal output from 12V DC motor at 100 RPM</p>
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
            <h3 className="text-xl font-orbitron text-performance-yellow mb-2">SelfMade</h3>
            <p className="text-sm text-metallic-grey">SelfMade V6 Engine Model</p>
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
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-metallic-grey mt-2">RPM</div>
            
            {/* X-axis ticks */}
            <div className="absolute left-0 right-0 bottom-0 flex justify-between px-4">
              {[0, 20, 40, 60, 80, 100].map((tick) => (
                <div key={tick} className="text-[10px] text-metallic-grey">{tick}</div>
              ))}
            </div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-b border-r border-engine-black"></div>
              ))}
            </div>
            
            {/* Power Curve */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,90 C20,80 40,60 60,40 C80,20 90,15 100,10" 
                fill="none" 
                stroke="#FF2E2E" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
              <circle cx="100" cy="10" r="2" fill="#FF2E2E" />
            </svg>
            
            {/* Torque Curve */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,70 C20,60 40,50 60,45 C80,43 90,44 100,45" 
                fill="none" 
                stroke="#00BFFF" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <circle cx="100" cy="45" r="2" fill="#00BFFF" />
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
