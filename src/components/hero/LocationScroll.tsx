import React from "react";
import { motion } from "framer-motion";

const LocationScroll = () => {
  const text = "SUNNYVALE CALIFORNIA";
  const repeatedText = Array(28).fill(text).join(" • ");

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-8 bg-gradient-to-t from-black/30 to-transparent">
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap text-white/90 text-xl tracking-[0.2em] font-light"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            x: {
              duration: 80,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{ paddingRight: "100vw" }}
        >
          {repeatedText}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap text-white/90 text-xl tracking-[0.2em] font-light absolute left-0"
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{ paddingRight: "100vw" }}
        >
          {repeatedText}
        </motion.div>
      </div>
    </div>
  );
};

export default LocationScroll;
