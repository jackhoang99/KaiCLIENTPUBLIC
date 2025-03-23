import React from "react";
import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import { useHero } from "../hooks/useHero";
import LoadingSpinner from "./ui/LoadingSpinner";

const Hero = () => {
  const { image, loading, error } = useHero();

  const defaultImage =
    "https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/studiohome10.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvc3R1ZGlvaG9tZTEwLmpwZyIsImlhdCI6MTc0MjcwOTc1MCwiZXhwIjoxNzc0MjQ1NzUwfQ.64AlBZWmMq5DxW0t18Z4XudxLjuyHlpZwb4AzjS_g-g";

  return (
    <div className="relative h-[70vh] md:h-screen">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {loading ? (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <LoadingSpinner size="large" />
          </div>
        ) : error ? (
          <img
            src={defaultImage}
            className="w-full h-full object-cover brightness-75"
            alt="KAI Fitness Studio"
          />
        ) : (
          <img
            src={image?.image_url || defaultImage}
            className="w-full h-full object-cover brightness-75"
            alt="KAI Fitness Studio"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <HeroTitle />
      </div>
    </div>
  );
};

export default Hero;
