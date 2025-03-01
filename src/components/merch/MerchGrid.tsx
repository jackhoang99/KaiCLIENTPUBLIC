import React from 'react';
import { motion } from 'framer-motion';
import MerchItem from './MerchItem';
import { useMerch } from '../../hooks/useMerch';
import LoadingSpinner from '../ui/LoadingSpinner';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const MerchGrid = () => {
  const { items, loading, error } = useMerch();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item) => (
        <MerchItem key={item.id} {...item} />
      ))}
    </motion.div>
  );
};

export default MerchGrid;