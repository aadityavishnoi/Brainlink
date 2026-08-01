import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper: fades + lifts content into view once, using
 * transform/opacity only. Fully inert when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 20, as = "div", className, style, id }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag id={id} className={className} style={style}>{children}</Tag>;
  }

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container for grids of cards — pass Reveal-less children and it staggers them. */
export function StaggerGroup({ children, className, style, gap = 0.08 }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style, y = 16 }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
