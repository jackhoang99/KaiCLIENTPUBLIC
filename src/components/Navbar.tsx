import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Use React Router
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";

const TENANT_NAME = "kailagreestudio"; // Mariana Tek tenant name

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Load Mariana Tek Scripts
  useEffect(() => {
    const scripts = ["polyfills", "js"];
    scripts.forEach((src) => {
      if (!document.querySelector(`script[src*="${src}"]`)) {
        const script = document.createElement("script");
        script.src = `https://${TENANT_NAME}.marianaiframes.com/${src}?t=${new Date().getTime()}`;
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }, []);

  const navLinkStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1";

  return (
    <nav className="fixed w-full z-50 px-4 md:px-6 py-4 bg-transparent">
      <div className="flex justify-between items-center">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-white">
          <Link to="/" className={navLinkStyle}>
            Home
          </Link>
          <Link to="/schedule" className={navLinkStyle}>
            Schedule
          </Link>{" "}
          {/* ✅ Fixed */}
          <Link to="/buy" className={navLinkStyle}>
            Buy
          </Link>
          <Link to="/about" className={navLinkStyle}>
            About
          </Link>
          <Link to="/faq" className={navLinkStyle}>
            FAQ
          </Link>
          <Link to="/account" className={navLinkStyle}>
            Account
          </Link>
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
              <Link to="/" onClick={closeMenu} className={navLinkStyle}>
                Home
              </Link>
              <Link to="/schedule" onClick={closeMenu} className={navLinkStyle}>
                Schedule
              </Link>{" "}
              {/* ✅ Fixed */}
              <Link to="/buy" onClick={closeMenu} className={navLinkStyle}>
                Buy
              </Link>
              <Link to="/about" onClick={closeMenu} className={navLinkStyle}>
                About
              </Link>
              <Link to="/faq" onClick={closeMenu} className={navLinkStyle}>
                FAQ
              </Link>
              <Link to="/account" onClick={closeMenu} className={navLinkStyle}>
                Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
