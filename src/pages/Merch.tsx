import React from 'react';
import Container from '../components/layout/Container';
import MerchGrid from '../components/merch/MerchGrid';
import MerchHeading from '../components/merch/MerchHeading';
import KaiLogo from '../components/mission/KaiLogo';

const Merch = () => {
  return (
    <div className="min-h-screen bg-sand pt-32 pb-20 relative">
      <Container>
        <MerchHeading />
        <MerchGrid />
      </Container>
      <KaiLogo className="absolute bottom-8 right-8" />
    </div>
  );
};

export default Merch;