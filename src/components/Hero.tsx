import React from "react";
import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import LocationScroll from "./hero/LocationScroll";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://static.wixstatic.com/media/8c7d69_35e0e42e65954df7a4e29eea84f728bb~mv2.jpg/v1/fill/w_1202,h_918,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_227531282.jpg"
          className="w-full h-full object-cover brightness-75"
          alt="KAI Fitness Studio"
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <HeroTitle />
      </div>
      <LocationScroll />
    </div>
  );
};

export default Hero;