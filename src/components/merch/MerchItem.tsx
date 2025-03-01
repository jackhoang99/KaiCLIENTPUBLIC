import React from 'react';
import { motion } from 'framer-motion';
import type { MerchItem as MerchItemType } from '../../types/merch';
import MerchImage from './MerchImage';
import MerchDetails from './MerchDetails';

const MerchItem = (props: MerchItemType) => {
  return (
    <motion.div 
      className="group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      <MerchImage image_url={props.image_url} name={props.name} />
      <MerchDetails {...props} />
    </motion.div>
  );
};

export default MerchItem;