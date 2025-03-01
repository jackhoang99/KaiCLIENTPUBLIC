import React from 'react';
import Container from './layout/Container';
import FAQHeading from './faq/FAQHeading';
import FAQList from './faq/FAQList';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] py-20">
      <Container>
        <FAQHeading />
        <FAQList />
      </Container>
    </div>
  );
};

export default FAQ;