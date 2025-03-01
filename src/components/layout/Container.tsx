import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;