import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.img 
      src="https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/Kai%20mark%20white.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvS2FpIG1hcmsgd2hpdGUucG5nIiwiaWF0IjoxNzM2NzU5MzM4LCJleHAiOjQ4OTAzNTkzMzh9.xexmS5gpouiH8hU4PLsGYFfSwp57mzmA0epO4azFNJU&t=2025-01-13T09%3A08%3A58.907Z"
      alt="KAI"
      className="w-[30px] h-[30px] md:w-24 md:h-24 mix-blend-multiply"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    />
  );
};

export default Logo;