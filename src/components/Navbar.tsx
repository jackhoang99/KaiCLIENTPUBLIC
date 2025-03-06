import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./navigation/NavLink";
import Logo from "./ui/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Function to navigate directly to external URLs
  const handleExternalNavigation = (url) => {
    window.location.href = url; // Navigate to external page
  };

  // Styling for Nav Links
  const navLinkStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1";
  const activeStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-white pb-1";

  return (
    <nav className="fixed w-full z-50 px-4 md:px-6 py-4 bg-transparent">
      <div className="flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-white">
          <NavLink
            to="/"
            className={location.pathname === "/" ? activeStyle : navLinkStyle}
          >
            Home
          </NavLink>
          <button
            onClick={() =>
              handleExternalNavigation("https://kailagreestudio.com/schedule")
            }
            className={navLinkStyle}
          >
            Schedule
          </button>
          <button
            onClick={() =>
              handleExternalNavigation("https://kailagreestudio.com/buy")
            }
            className={navLinkStyle}
          >
            Buy
          </button>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <button
            onClick={() =>
              handleExternalNavigation("https://kailagreestudio.com/account")
            }
            className={navLinkStyle}
          >
            Account
          </button>
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
            <div className="flex flex-col space-y-6 text-white text-center">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <button
                onClick={() => {
                  handleExternalNavigation(
                    "https://kailagreestudio.com/schedule"
                  );
                  setIsMenuOpen(false);
                }}
                className={navLinkStyle}
              >
                Schedule
              </button>
              <button
                onClick={() => {
                  handleExternalNavigation("https://kailagreestudio.com/buy");
                  setIsMenuOpen(false);
                }}
                className={navLinkStyle}
              >
                Buy
              </button>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/faq" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </NavLink>
              <button
                onClick={() => {
                  handleExternalNavigation(
                    "https://kailagreestudio.com/account"
                  );
                  setIsMenuOpen(false);
                }}
                className={navLinkStyle}
              >
                Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
