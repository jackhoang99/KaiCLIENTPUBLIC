import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";

const TENANT_NAME = "kailagreestudio"; // Mariana Tek tenant name

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAccountPage = location.pathname === '/account.html';

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1";

  // Navigation items configuration
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/schedule.html', label: 'Schedule' },
    { path: '/buy.html', label: 'Buy' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
  ];

  // Render either Link or anchor tag based on current page
  const NavItem = ({ path, label }: { path: string; label: string }) => {
    if (path.endsWith('.html')) {
      return (
        <a href={path} className={navLinkStyle}>
          {label}
        </a>
      );
    }
    return (
      <Link to={path} className={navLinkStyle}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50 px-4 md:px-6 py-4 bg-transparent">
      <div className="flex justify-between items-center">
        {isAccountPage ? (
          <a href="/" className="inline-block">
            <Logo />
          </a>
        ) : (
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-white">
          {navItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
          <a href="/account.html" className={navLinkStyle}>
            Account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 py-6 px-4 md:hidden"
          >
            <div className="flex flex-col space-x-6 text-white text-center">
              {navItems.map((item) => (
                <NavItem key={item.path} {...item} />
              ))}
              <a 
                href="/account.html" 
                onClick={closeMenu}
                className={navLinkStyle}
              >
                Account
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
