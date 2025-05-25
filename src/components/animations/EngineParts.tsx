
import React from 'react';
import { motion } from 'framer-motion';

export const PistonAnimation: React.FC = () => {
  return (
    <div className="relative h-40 w-20 mx-auto">
      <div className="absolute top-0 left-0 right-0 mx-auto w-20 h-4 bg-chrome-silver rounded-t-md"></div>
      <motion.div 
        className="absolute top-4 left-0 right-0 mx-auto w-16 h-24 bg-metallic-grey rounded-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute top-1 left-1 right-1 bottom-1 bg-engine-black rounded-sm"></div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-8 h-12 bg-chrome-silver rounded-b-md"></div>
    </div>
  );
};

export const CrankshaftAnimation: React.FC = () => {
  return (
    <div className="relative h-40 w-40 mx-auto">
      <motion.div 
        className="absolute top-1/2 left-1/2 w-32 h-4 bg-chrome-silver rounded-md"
        style={{ transformOrigin: "center" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-6 h-6 bg-racing-red rounded-full border-2 border-metallic-grey"></div>
        <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-6 h-6 bg-racing-red rounded-full border-2 border-metallic-grey"></div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-engine-black rounded-full border-2 border-chrome-silver"></div>
    </div>
  );
};

export const ValveAnimation: React.FC = () => {
  return (
    <div className="relative h-40 w-20 mx-auto">
      <div className="absolute top-0 left-0 right-0 mx-auto w-12 h-12 bg-chrome-silver rounded-full"></div>
      <motion.div 
        className="absolute top-12 left-0 right-0 mx-auto w-4 h-20 bg-metallic-grey"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-16 h-8 bg-engine-black rounded-md"></div>
    </div>
  );
};

export const CombustionAnimation: React.FC = () => {
  return (
    <div className="relative h-40 w-40 mx-auto">
      <div className="absolute top-0 left-0 right-0 mx-auto w-32 h-32 bg-engine-black rounded-lg border border-metallic-grey"></div>
      <motion.div
        className="absolute top-4 left-4 right-4 bottom-4 bg-racing-red rounded-md opacity-70"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-performance-yellow opacity-50"
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};
