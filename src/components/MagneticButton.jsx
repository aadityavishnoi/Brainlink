import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Wraps a single button/link child with a subtle magnetic-pull hover effect.
 * Desktop pointer only — falls back to a static wrapper on touch devices
 * and when the user prefers reduced motion.
 */
export default function MagneticButton({ children, strength = 0.35, style }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  if (shouldReduceMotion || typeof window === "undefined" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return <div style={style}>{children}</div>;
  }

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: "inline-block", ...style }}
    >
      {children}
    </motion.div>
  );
}
