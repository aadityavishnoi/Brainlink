import { motion, useReducedMotion } from "framer-motion";

const variants = {
  initial: { clipPath: "circle(0% at 50% 35%)" },
  animate: {
    clipPath: "circle(150% at 50% 35%)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    clipPath: "circle(0% at 50% 35%)",
    transition: { duration: 0.35, ease: [0.6, 0, 1, 1] },
  },
};

/**
 * Wraps routed page content in a soft circular "portal" reveal on navigation.
 * Fixed-position chrome (nav, WhatsApp FAB) is unaffected — clip-path does not
 * establish a containing block for position:fixed descendants, so they stay
 * put while the page content underneath reveals through the portal.
 */
export default function PortalPageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
      {children}
    </motion.div>
  );
}
