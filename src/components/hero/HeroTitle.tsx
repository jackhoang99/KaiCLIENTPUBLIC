import React from "react";
import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <div className="text-center">
      <motion.h1
        className="text-6xl md:text-8xl font-display mb-4 tracking-wider text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
      </motion.h1>
    </div>
  );
};

export default HeroTitle;