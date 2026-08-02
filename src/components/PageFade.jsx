import { motion, useReducedMotion } from "framer-motion";

/**
 * Minimal page-to-page transition — opacity only, ~200ms. Replaces the
 * previous circular "portal" mask transition, which was too slow/decorative
 * for a fast, business-first site.
 */
export default function PageFade({ children }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
