import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import FAQList from '../components/faq/FAQList';
import ContactForm from '../components/faq/ContactForm';

const FAQ = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <motion.h2 
            className="text-4xl md:text-8xl font-display mb-20 tracking-wider px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FREQUENTLY<br />
            ASKED<br />
            QUESTIONS
          </motion.h2>
          <FAQList />
          <ContactForm />
        </Container>
      </div>
    </PageLayout>
  );
};

export default FAQ;