import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BeamAnimation = () => {
  const [height, setHeight] = useState(0);
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    // Set height to document height
    const updateHeight = () => {
      setHeight(document.documentElement.scrollHeight);
    };
    
    // Initial height
    updateHeight();
    
    // Update height on resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    if (height === 0) return;

    // Create initial beams
    const initialBeams = Array.from({ length: 3 }, () => createBeam(height));
    setBeams(initialBeams);

    // Add new beams periodically
    const interval = setInterval(() => {
      setBeams(prevBeams => {
        // Remove beams that have completed their animation
        const filteredBeams = prevBeams.filter(beam => 
          Date.now() - beam.startTime < beam.duration * 1000
        );
        
        // Add a new beam with random properties
        return [...filteredBeams, createBeam(height)];
      });
    }, 5000); // New beam every 5 seconds

    return () => clearInterval(interval);
  }, [height]);

  // Function to create a beam with random properties
  const createBeam = (height) => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      startTime: Date.now(),
      duration: Math.random() * 20 + 15, // 15-35 seconds
      height: Math.random() * 200 + 100, // 100-300px
      initialY: -300,
      finalY: height + 100,
      opacity: Math.random() * 0.5 + 0.5, // 0.5-1.0
    };
  };

  // Function to render a beam side
  const renderBeamSide = (position) => (
    <div className={`fixed ${position}-8 top-0 bottom-0 h-full pointer-events-none z-50`}>
      {/* Static vertical line with updated styling */}
      <div className={`absolute ${position === "left" ? "left-0" : "right-0"} top-0 w-[2px] h-full border-1 border-s1 bg-s2`}></div>
      
      {/* Multiple animated beams */}
      {beams.map(beam => (
        <motion.div
          key={`${position}-${beam.id}`}
          initial={{ y: beam.initialY }}
          animate={{ y: beam.finalY }}
          transition={{ 
            duration: beam.duration,
            ease: "linear"
          }}
          className={`absolute ${position === "left" ? "left-0" : "right-0"}`}
          style={{ opacity: beam.opacity }}
        >
          {/* Trailing effect */}
          <svg width="1" height={beam.height} className="overflow-visible">
            <defs>
              <linearGradient id={`beamGradient-${position}-${beam.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00A3FF" stopOpacity="1" />
                <stop offset="5%" stopColor="#0057FF" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#0057FF" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#00A3FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
              </linearGradient>
              <filter id={`glow-${position}-${beam.id}`} x="-100%" y="-50%" width="300%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <motion.rect
              x="0"
              y="0"
              width="1"
              height={beam.height}
              fill={`url(#beamGradient-${position}-${beam.id})`}
              filter={`url(#glow-${position}-${beam.id})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      {renderBeamSide("left")}
      {renderBeamSide("right")}
    </>
  );
};