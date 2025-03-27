import React from "react";
import { motion } from "framer-motion";
import { useHero } from "../hooks/useHero";
import LoadingSpinner from "./ui/LoadingSpinner";

const Hero = () => {
  const { desktopImage, mobileImage, loading, error } = useHero();

  const defaultDesktopImage =
    "https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/studiohome10.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvc3R1ZGlvaG9tZTEwLmpwZyIsImlhdCI6MTc0MjcwOTc1MCwiZXhwIjoxNzc0MjQ1NzUwfQ.64AlBZWmMq5DxW0t18Z4XudxLjuyHlpZwb4AzjS_g-g";
  const defaultMobileImage = defaultDesktopImage;

  return (
    <div className="relative h-[600px] md:h-screen">
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
          <>
            <img
              src={defaultDesktopImage}
              className="hidden md:block w-full h-full object-cover brightness-75"
              alt="KAI Fitness Studio"
            />
            <img
              src={defaultMobileImage}
              className="md:hidden w-full h-full object-cover brightness-75"
              alt="KAI Fitness Studio"
            />
          </>
        ) : (
          <>
            <img
              src={desktopImage?.image_url || defaultDesktopImage}
              className="hidden md:block w-full h-full object-cover brightness-75"
              alt="KAI Fitness Studio"
            />
            <img
              src={mobileImage?.image_url || defaultMobileImage}
              className="md:hidden w-full h-full object-cover brightness-75"
              alt="KAI Fitness Studio"
            />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
