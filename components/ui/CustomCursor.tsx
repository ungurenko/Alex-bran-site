import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Softer springs for better performance sensation
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Basic check to avoid running on touch devices if they trigger mouse events
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Optimized selector check
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.classList.contains('cursor-hover');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference hidden md:block will-change-transform"
      style={{
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%"
      }}
      animate={{
        scale: isHovering ? 5 : 1, // Slightly smaller scale for performance
        backgroundColor: isHovering ? "#EB5E28" : "#ffffff",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 25 },
        backgroundColor: { duration: 0.15 }
      }}
    />
  );
};