import React from 'react';

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-2 mb-4">
      {children}
    </div>
  );
};

export default ButtonContainer;