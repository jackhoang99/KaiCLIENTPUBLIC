import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import PageLayout from '../components/layout/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <Mission />
    </PageLayout>
  );
};

export default Home;