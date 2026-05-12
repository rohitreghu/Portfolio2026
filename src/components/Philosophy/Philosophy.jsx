import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../Section';
import './Philosophy.css';

const principles = [
  {
    id: 'scale',
    num: '01',
    title: 'Design for Scale',
    description: 'Architect systems that gracefully handle exponential growth. I believe in establishing robust foundational patterns early, ensuring that the codebase can scale alongside the business without accumulating crippling technical debt.',
    metadata: 'Scalability • Sustainability • Boundaries',
    quote: 'Scalable systems emerge from strong boundaries and thoughtful abstractions established early.',
    context: ['Microfrontend Architecture', 'Monorepo Setups', 'Domain-Driven Design'],
    visualType: 'grids'
  },
  {
    id: 'systems',
    num: '02',
    title: 'Think in Systems',
    description: 'Solve the root causes, not just the symptoms. By building reusable, decoupled abstractions and investing in comprehensive design systems, I empower product teams to build faster and more consistently.',
    metadata: 'Systems Thinking • Reusability • Consistency',
    quote: 'Good engineering solves root causes instead of repeatedly patching symptoms.',
    context: ['Design Systems', 'Shared Platform Libraries', 'Core UI Foundations'],
    visualType: 'nodes'
  },
  {
    id: 'incremental',
    num: '03',
    title: 'Ship Incrementally',
    description: 'Deliver value continuously. I advocate for shipping complex features through small, safe, and measurable iterations, minimizing deployment risk and maximizing rapid user feedback loops.',
    metadata: 'Iteration • Delivery • Feedback Loops',
    quote: 'Fast iteration reduces risk and creates stronger feedback loops for product evolution.',
    context: ['CI/CD Pipelines', 'Feature Flagging', 'Strangler Fig Pattern'],
    visualType: 'steps'
  },
  {
    id: 'impact',
    num: '04',
    title: 'Code for Impact',
    description: 'Engineering is a means to an end. I constantly align technical decisions with overarching business goals and user outcomes, ensuring that every architectural choice drives measurable product value.',
    metadata: 'Product Thinking • Outcomes • Value',
    quote: 'Technology decisions should serve user outcomes and long-term product value.',
    context: ['Performance Budgets', 'Accessibility Compliance', 'Core Web Vitals'],
    visualType: 'rings'
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const PhilosophyVisual = ({ type }) => {
  switch(type) {
    case 'grids':
      return (
        <svg className="phil-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="expandGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#expandGrid)" />
          <rect width="60" height="60" x="20" y="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'nodes':
      return (
        <svg className="phil-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="80" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.3" />
          <path d="M23 50 L46 50 M54 50 L77 50 M50 23 L50 46 M50 54 L50 77" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      );
    case 'steps':
      return (
        <svg className="phil-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10 80 L30 80 L30 60 L50 60 L50 40 L70 40 L70 20 L90 20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="60" r="2" fill="currentColor" />
          <circle cx="50" cy="40" r="2" fill="currentColor" />
          <circle cx="70" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    case 'rings':
      return (
        <svg className="phil-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.2" />
        </svg>
      );
    default:
      return null;
  }
};

const Philosophy = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="philosophy" className="philosophy-section">
      <motion.div 
        className="phil-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={cardVariant} className="section-title phil-title">Engineering Philosophy</motion.h2>
        
        <div className="phil-grid">
          {principles.map((p) => {
            const isExpanded = expandedId === p.id;

            return (
              <motion.div 
                key={p.id} 
                variants={cardVariant} 
                className={`phil-card group ${isExpanded ? 'is-expanded' : ''}`}
                onClick={() => handleCardClick(p.id)}
              >
                {/* Background Line Animation & Glow */}
                <div className="phil-card-accent-line"></div>
                <div className="phil-card-glow"></div>
                <PhilosophyVisual type={p.visualType} />

                <div className="phil-content-wrapper">
                  <span className="phil-num">{p.num}</span>
                  <h3 className="phil-card-title">{p.title}</h3>
                  
                  <p className="phil-card-desc">
                    {p.description}
                  </p>
                  
                  <div className="phil-metadata">
                    {p.metadata}
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="phil-expansion">
                          <div className="phil-quote-box">
                            <span className="material-symbols-outlined phil-quote-icon">format_quote</span>
                            <p className="phil-quote-text">{p.quote}</p>
                          </div>
                          
                          <div className="phil-context-box">
                            <span className="phil-context-label">Applied Context</span>
                            <ul className="phil-context-list">
                              {p.context.map((ctx, idx) => (
                                <li key={idx}>{ctx}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={cardVariant} className="phil-closing-statement">
          <p>
            &ldquo;Good engineering is not about maximizing complexity. It is about creating systems that teams can evolve confidently over time.&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Philosophy;
