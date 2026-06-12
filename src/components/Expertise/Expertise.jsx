import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../Section';
import { makeStagger, makeFadeUp } from '../../utils/animations';
import './Expertise.css';

const expertiseItems = [
  {
    id: 'arch',
    title: 'Frontend Architecture',
    description: 'Designing resilient, scalable patterns for enterprise applications. I specialize in breaking down monoliths and setting up core infrastructure.',
    icon: 'architecture',
    capabilities: ['Microfrontends', 'Module Federation', 'Runtime Composition', 'Shared State Boundaries'],
    meta: 'React • TypeScript • Scalability',
    details: [
      'Reduced duplicated frontend foundations across teams',
      'Designed scalable runtime composition boundaries',
      'Established robust decoupled architectural patterns'
    ],
    visualType: 'nodes'
  },
  {
    id: 'ui',
    title: 'Product UI Engineering',
    description: 'Crafting high-performance, accessible, and polished user interfaces. Focus on delivering seamless experiences that feel genuinely premium.',
    icon: 'widgets',
    capabilities: ['Design Systems', 'Accessibility', 'Motion Systems', 'Performance Optimization'],
    meta: 'Accessibility • UX • Performance',
    details: [
      'Engineered accessible, 60fps interface interactions',
      'Architected comprehensive design system foundations',
      'Optimized rendering performance for complex data views'
    ],
    visualType: 'grid'
  },
  {
    id: 'platform',
    title: 'Shared Platform Systems',
    description: 'Building the tools that build the product. Extensive experience architecting internal CLI tools and shared core libraries.',
    icon: 'dns',
    capabilities: ['Shared npm Packages', 'Internal CLI Tooling', 'Build Infrastructure', 'UI Foundations'],
    meta: 'Runtime Systems • Federation • Platform',
    details: [
      'Built reusable internal platform tooling and libraries',
      'Abstracted complex build configurations into simple CLIs',
      'Reduced engineering overhead through shared capabilities'
    ],
    visualType: 'flow'
  },
  {
    id: 'ai',
    title: 'AI-assisted Engineering',
    description: 'Integrating Large Language Models into workflows. Accelerating internal velocity and powering intelligent, context-aware features.',
    icon: 'psychology',
    capabilities: ['LLM Integrations', 'AI Workflows', 'Context-aware UX', 'Productivity Tooling'],
    meta: 'LLMs • Context • Tooling',
    details: [
      'Integrated AI capabilities seamlessly into core product flows',
      'Developed custom context-aware tooling for developers',
      'Built prompt-driven interface generation mechanisms'
    ],
    visualType: 'neural'
  }
];

const staggerContainer = makeStagger(0.15);
const cardVariant = makeFadeUp(30, 0.7);

const ExpertiseVisual = ({ type }) => {
  // Low-contrast, subtle architectural SVGs
  switch(type) {
    case 'nodes':
      return (
        <svg className="exp-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="30" r="2" fill="currentColor" />
          <circle cx="50" cy="70" r="2.5" fill="currentColor" />
          <circle cx="80" cy="40" r="2" fill="currentColor" />
          <path d="M20 30 L50 70 L80 40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        </svg>
      );
    case 'grid':
      return (
        <svg className="exp-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.25" />
          </pattern>
          <rect width="100" height="100" fill="url(#smallGrid)" />
        </svg>
      );
    case 'flow':
      return (
        <svg className="exp-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10 50 Q 30 20 50 50 T 90 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M10 60 Q 40 80 60 50 T 90 60" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
        </svg>
      );
    case 'neural':
      return (
        <svg className="exp-bg-visual" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="30" cy="30" r="1.5" fill="currentColor" />
          <circle cx="30" cy="70" r="1.5" fill="currentColor" />
          <circle cx="70" cy="50" r="2" fill="currentColor" />
          <path d="M30 30 L70 50 L30 70" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
};

const Expertise = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="expertise" className="expertise-section">
      <motion.div 
        className="expertise-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariant} className="expertise-header">
          <h2 className="section-title">Core Expertise</h2>
        </motion.div>
        
        <div className="expertise-grid">
          {expertiseItems.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <motion.div 
                key={item.id} 
                variants={cardVariant} 
                className={`expertise-card group ${isExpanded ? 'is-expanded' : ''}`}
                onClick={() => handleCardClick(item.id)}
              >
                {/* Subtle animated inner glow */}
                <div className="card-glow-bg"></div>
                <ExpertiseVisual type={item.visualType} />
                
                {/* Top Right Icon Box */}
                <div className="expertise-icon-wrapper">
                  <span className="material-symbols-outlined expertise-icon">{item.icon}</span>
                </div>
                
                {/* Main Content Area */}
                <div className="expertise-content-wrapper">
                  <div className="expertise-content">
                    <h3 className="expertise-title">{item.title}</h3>
                    <p className="expertise-description">
                      {item.description}
                    </p>
                    
                    {/* Hover Capabilities Reveal */}
                    <div className="expertise-capabilities">
                      <div className="capabilities-label">Capabilities:</div>
                      <ul className="capabilities-list">
                        {item.capabilities.map((cap, i) => (
                          <li key={i}>{cap}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Click Expansion Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="expertise-expansion">
                          <div className="expansion-divider"></div>
                          <div className="expansion-label">Architectural Focus:</div>
                          <ul className="expansion-list">
                            {item.details.map((detail, i) => (
                              <li key={i}>
                                <span className="material-symbols-outlined bullet-icon">subdirectory_arrow_right</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="expertise-meta">
                    {item.meta}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Expertise;
