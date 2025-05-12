import React from "react";
import { motion } from "framer-motion";

function MotionLeft({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 3, y: -50 }}
      animate={{ opacity: 6, rotate: 0, x: 0 }}
      exit={{ opacity: 0, rotate: -10, x: 100 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionLeft;
