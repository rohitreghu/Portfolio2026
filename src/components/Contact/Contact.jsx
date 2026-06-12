import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import { makeStagger, makeFadeUp } from '../../utils/animations';
import './Contact.css';

const staggerContainer = makeStagger(0.15);
const fadeUp = makeFadeUp(30, 0.8);

const Contact = () => {
  return (
    <Section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="contact-glow-bg"></div>
        <motion.h2 variants={fadeUp} className="contact-title">Let's build something meaningful.</motion.h2>

        <motion.div variants={fadeUp} className="contact-links">
          <a href="mailto:rohitreghu8989@gmail.com" className="contact-card" aria-label="Send an email to rohitreghu8989@gmail.com">
            <span className="material-symbols-outlined contact-icon" aria-hidden="true">mail</span>
            <span className="contact-label">Email</span>
            <span className="contact-value">rohitreghu8989@gmail.com</span>
          </a>

          <a href="https://github.com/rohitreghu" target="_blank" rel="noopener noreferrer" className="contact-card" aria-label="Visit Rohit Reghu's GitHub profile">
            <span className="material-symbols-outlined contact-icon" aria-hidden="true">code</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/rohitreghu</span>
          </a>

          <a href="https://linkedin.com/in/rohitreghu7" target="_blank" rel="noopener noreferrer" className="contact-card" aria-label="Visit Rohit Reghu's LinkedIn profile">
            <span className="material-symbols-outlined contact-icon" aria-hidden="true">work</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/rohitreghu7</span>
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;
