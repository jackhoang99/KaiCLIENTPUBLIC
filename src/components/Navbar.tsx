import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./navigation/NavLink";
import Logo from "./ui/Logo";

const TENANT_NAME = "kailagreestudio"; // Replace with your actual Mariana Tek tenant name

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Inject Mariana Tek script when Navbar mounts
  useEffect(() => {
    const loadMarianaTek = () => {
      if (document.querySelector('script[src*="marianaiframes"]')) {
        return; // Script already loaded
      }

      const scripts = ["polyfills", "js"];
      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = `https://${TENANT_NAME}.marianaiframes.com/${src}?t=${new Date().getTime()}`;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    loadMarianaTek();
  }, []);

  // Function to update URL & reload page
  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path); // Update the URL without a full refresh
    }
    setTimeout(() => {
      window.location.reload(); // Ensure Mariana Tek reloads correctly
    }, 300);
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
            onClick={() => handleNavigation("/schedule")}
            className={
              location.pathname.includes("/schedule")
                ? activeStyle
                : navLinkStyle
            }
          >
            Schedule
          </button>
          <button
            onClick={() => handleNavigation("/buy")}
            className={
              location.pathname.includes("/buy") ? activeStyle : navLinkStyle
            }
          >
            Buy
          </button>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <button
            onClick={() => handleNavigation("/account")}
            className={
              location.pathname.includes("/account")
                ? activeStyle
                : navLinkStyle
            }
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
                  handleNavigation("/schedule");
                  setIsMenuOpen(false);
                }}
                className={navLinkStyle}
              >
                Schedule
              </button>
              <button
                onClick={() => {
                  handleNavigation("/buy");
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
                  handleNavigation("/account");
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
