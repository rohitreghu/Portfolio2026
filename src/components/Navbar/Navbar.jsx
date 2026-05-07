import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll or click outside
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={() => setIsOpen(false)}>Rohit Reghu</a>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>

        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#case-studies">Work</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              className="nav-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="nav-mobile-links">
                <li><a href="#timeline" onClick={() => setIsOpen(false)}>Timeline</a></li>
                <li><a href="#expertise" onClick={() => setIsOpen(false)}>Expertise</a></li>
                <li><a href="#case-studies" onClick={() => setIsOpen(false)}>Work</a></li>
                <li><a href="#philosophy" onClick={() => setIsOpen(false)}>Philosophy</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
