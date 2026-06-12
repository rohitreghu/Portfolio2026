import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, triggerToggle } = useTheme();

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
        
        <div className="nav-actions">
          <nav className="nav-desktop">
            <ul className="nav-links">
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#case-studies">Work</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              triggerToggle(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
              );
            }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

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
