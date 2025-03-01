import React from 'react';

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

const EmailLink = ({ email, className = '', children }: EmailLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a 
      href={`mailto:${email}`}
      onClick={handleClick}
      className={`hover:underline ${className}`}
    >
      {children || email}
    </a>
  );
};

export default EmailLink;