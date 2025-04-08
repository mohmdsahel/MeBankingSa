import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BeamAnimation = () => {
  const [height, setHeight] = useState(0);
  const [beams, setBeams] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set height to document height
    const updateHeight = () => {
      setHeight(document.documentElement.scrollHeight);
      setIsSmallScreen(window.innerWidth < 768); // Hide on screens smaller than md breakpoint
    };
    
    // Initial height and screen check
    updateHeight();
    
    // Update height and screen size on resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Don't render anything on small screens
  if (isSmallScreen) return null;

  return (
    <div className="fixed left-8 top-0 bottom-0 h-full pointer-events-none z-50 max-md:hidden">
      {/* Static vertical line */}
      <div className="absolute left-0 top-0 w-[2px] h-full border-2 border-s2 bg-s1"></div>
      
      {/* Multiple animated beams */}
      {beams.map(beam => (
        <motion.div
          key={beam.id}
          initial={{ y: beam.initialY }}
          animate={{ y: beam.finalY }}
          transition={{ 
            duration: beam.duration,
            ease: "linear"
          }}
          className="absolute left-0"
          style={{ opacity: beam.opacity }}
        >
          {/* Trailing effect */}
          <svg width="1" height={beam.height} className="overflow-visible">
            <defs>
              <linearGradient id={`beamGradient-${beam.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00A3FF" stopOpacity="1" />
                <stop offset="5%" stopColor="#0057FF" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#0057FF" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#00A3FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
              </linearGradient>
              <filter id={`glow-${beam.id}`} x="-100%" y="-50%" width="300%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <motion.rect
              x="0"
              y="0"
              width="1"
              height={beam.height}
              fill={`url(#beamGradient-${beam.id})`}
              filter={`url(#glow-${beam.id})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};