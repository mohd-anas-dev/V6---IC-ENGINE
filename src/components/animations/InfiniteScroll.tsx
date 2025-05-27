import React, { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface InfiniteScrollProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  direction = 'left',
  speed = 50,  // Changed from 5 to 2 to increase animation speed
  className = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);
  const [duplicates, setDuplicates] = React.useState(2);

  useEffect(() => {
    if (!contentRef.current || !scrollRef.current) return;
    
    // Get the width of the content
    const contentWidth = contentRef.current.offsetWidth;
    const containerWidth = scrollRef.current.offsetWidth;
    
    // Calculate how many duplicates we need to ensure seamless scrolling
    // We need at least 2 sets of items to create the infinite effect
    const duplicatesNeeded = Math.max(2, Math.ceil((containerWidth * 2) / contentWidth));
    
    setContentWidth(contentWidth);
    setDuplicates(duplicatesNeeded);
  }, []);

  // Create an array of duplicates to ensure seamless scrolling
  const duplicateContent = Array(duplicates).fill(0);

  // Calculate animation duration based on content width and speed
  const duration = contentWidth / speed;

  return (
    <div 
      ref={scrollRef}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? -contentWidth : contentWidth,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration,
          ease: 'linear',
        }}
        style={{ width: 'fit-content' }}
      >
        {/* Original content for reference */}
        <div ref={contentRef} className="flex">
          {children}
        </div>
        
        {/* Duplicated content for seamless scrolling */}
        {duplicateContent.map((_, index) => (
          <div key={index} className="flex">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;