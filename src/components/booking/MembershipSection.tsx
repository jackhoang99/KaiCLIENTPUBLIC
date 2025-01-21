import React from 'react';
import { motion } from 'framer-motion';
import PriceCard from './PriceCard';
import type { Package } from '../../types/booking';

interface MembershipSectionProps {
  packages: Package[];
}

const MembershipSection = ({ packages }: MembershipSectionProps) => {
  return (
    <motion.div
      className="mb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-5xl md:text-7xl">MEMBERSHIPS</h2>
        <p className="text-black/60">Best value</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="h-full"
          >
            <PriceCard {...pkg} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MembershipSection;