import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./ui/Logo";

const TENANT_NAME = "kailagreestudio"; // Replace with your actual Mariana Tek tenant name

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Ensure Mariana Tek script is fully loaded before execution continues
  const loadMarianaTek = () => {
    return new Promise((resolve) => {
      if (document.querySelector('script[src*="marianaiframes"]')) {
        resolve();
        return;
      }

      const scripts = ["polyfills", "js"];
      let loadedScripts = 0;

      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = `https://${TENANT_NAME}.marianaiframes.com/${src}?t=${new Date().getTime()}`;
        script.async = true;
        script.onload = () => {
          loadedScripts++;
          if (loadedScripts === scripts.length) {
            resolve();
          }
        };
        document.body.appendChild(script);
      });
    });
  };

  useEffect(() => {
    loadMarianaTek().then(() => console.log("✅ Mariana Tek scripts loaded!"));
  }, []);

  // Styling for Nav Links
  const navLinkStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1";
  const activeStyle =
    "text-white hover:text-white/80 transition-colors tracking-widest uppercase text-sm border-b border-white pb-1";

  return (
    <nav className="fixed w-full z-50 px-4 md:px-6 py-4 bg-transparent">
      <div className="flex justify-between items-center">
        <a href="/" className="inline-block">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-white">
          <a href="/" className={navLinkStyle}>
            Home
          </a>
          <a href="/schedule" className={navLinkStyle}>
            Schedule
          </a>
          <a href="/buy" className={navLinkStyle}>
            Buy
          </a>
          <a href="/about" className={navLinkStyle}>
            About
          </a>
          <a href="/faq" className={navLinkStyle}>
            FAQ
          </a>
          <a href="/account" className={navLinkStyle}>
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
            <div className="flex flex-col space-y-6 text-white text-center">
              <a href="/" onClick={closeMenu} className={navLinkStyle}>
                Home
              </a>
              <a href="/schedule" onClick={closeMenu} className={navLinkStyle}>
                Schedule
              </a>
              <a href="/buy" onClick={closeMenu} className={navLinkStyle}>
                Buy
              </a>
              <a href="/about" onClick={closeMenu} className={navLinkStyle}>
                About
              </a>
              <a href="/faq" onClick={closeMenu} className={navLinkStyle}>
                FAQ
              </a>
              <a href="/account" onClick={closeMenu} className={navLinkStyle}>
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
