import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

const Button = ({ children, className = '', showArrow = true, ...props }: ButtonProps) => {
  return (
    <button 
      {...props}
      className={`group flex items-center justify-center space-x-4 text-lg font-light ${className}`}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="group-hover:translate-x-2 transition-transform" />}
    </button>
  );
};

export default Button;