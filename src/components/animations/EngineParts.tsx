
import React from 'react';
import { motion } from 'framer-motion';

export const PistonAnimation: React.FC = () => {
  return (
    <div className="relative h-40 flex items-center justify-center">
      <motion.div
        className="w-16 h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-lg relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        {/* Piston head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-18 h-4 bg-gradient-to-b from-gray-200 to-gray-400 rounded-t-lg border-2 border-gray-600"></div>
        
        {/* Piston rings */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-700"></div>
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-700"></div>
        
        {/* Connecting rod */}
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gradient-to-b from-gray-400 to-gray-600"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
      
      {/* Cylinder */}
      <div className="absolute bottom-0 w-20 h-32 bg-gradient-to-b from-gray-600 to-gray-800 border-2 border-gray-700 rounded-b-lg">
        <div className="absolute inset-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg"></div>
      </div>
    </div>
  );
};
