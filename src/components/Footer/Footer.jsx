import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} Rohit Reghu.</p>
        <div className="footer-links">
          <button onClick={scrollToTop} className="footer-back-to-top">Back to Top</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
