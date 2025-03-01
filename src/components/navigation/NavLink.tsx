import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b ${
        isActive ? 'border-white' : 'border-transparent hover:border-white'
      } pb-1`}
    >
      {children}
    </Link>
  );
};

export default NavLink;