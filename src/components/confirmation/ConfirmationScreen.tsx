import React from 'react';
import Container from '../layout/Container';
import ConfirmationMessage from './ConfirmationMessage';
import ConfirmationActions from './ConfirmationActions';

const ConfirmationScreen = () => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <ConfirmationMessage />
          <ConfirmationActions />
        </div>
      </Container>
    </div>
  );
};

export default ConfirmationScreen;