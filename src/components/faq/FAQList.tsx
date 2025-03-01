import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';
import { useFAQ } from '../../hooks/useFAQ';
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

const FAQList = () => {
  const { faqs, loading, error } = useFAQ();

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
      className="max-w-4xl px-4 md:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {faqs.map((faq, index) => (
        <FAQItem 
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isLast={index === faqs.length - 1}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default FAQList;