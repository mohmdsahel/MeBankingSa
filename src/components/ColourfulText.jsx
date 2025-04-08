"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }) {
  const colors = [
    "#00A3FF",  // Light blue
    "#0057FF",  // Medium blue
    "#3B82F6",  // Blue
    "#0369A1",  // Deep blue
    "#1E40AF",  // Navy blue
    "#2563EB",  // Royal blue
    "#0284C7",  // Sky blue
    "#0EA5E9",  // Bright blue
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight">
      {char}
    </motion.span>
  ));
}