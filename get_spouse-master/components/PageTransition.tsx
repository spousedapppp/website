"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.3,
};

const PageTransition: React.FC<{ children: ReactNode }> = ({ children }) => {
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window === "undefined" ? "" : window.location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}
        transition={transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
