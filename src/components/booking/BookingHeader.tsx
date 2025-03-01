import React from 'react';
import { motion } from 'framer-motion';

const BookingHeader = () => {
  return (
    <motion.div 
      className="mb-32 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-display text-6xl md:text-[120px] tracking-wider mb-6">
        BOOK YOUR
        <br />
        EXPERIENCE
      </h1>
      <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl">
        Transform your fitness journey with our signature Lagree method classes.
        Choose the package that best fits your lifestyle.
      </p>
      <div className="absolute -right-20 top-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -left-20 bottom-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
};

export default BookingHeader;