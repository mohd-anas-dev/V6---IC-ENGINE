
import React from 'react';
import { motion } from 'framer-motion';

interface BentoItemProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  title, 
  description, 
  icon, 
  className, 
  onClick,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`bento-card cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        {icon && <div className="text-neon-blue">{icon}</div>}
        <div>
          <h3 className="font-orbitron text-lg text-chrome-silver">{title}</h3>
          {description && <p className="text-sm text-metallic-grey mt-1">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div className={`bento-grid ${className || ''}`}>
      {children}
    </div>
  );
};
