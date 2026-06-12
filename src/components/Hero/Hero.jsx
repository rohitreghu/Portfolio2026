import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Section from '../Section';
import { makeStagger, makeFadeUp, motionProp } from '../../utils/animations';
import './Hero.css';

// Hero-specific variants: smaller y offset, stagger with delayChildren
const staggerContainer = makeStagger(0.15, 0.2);
const fadeUp = makeFadeUp(20, 0.6);

const archNodes = [
  {
    id: 'shell',
    label: 'Shell',
    icon: 'hub',
    posClass: 'node-center',
    pulseClass: 'pulse-slow',
    link: '/case-studies/microfrontend-platform',
    tooltip: 'Microfrontend Orchestration Layer',
    isLarge: true
  },
  {
    id: 'auth',
    label: 'Auth',
    icon: 'passkey',
    posClass: 'node-tl',
    pulseClass: 'pulse-slower',
    tooltip: 'Federated Authentication',
    pathId: 'path-tl'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    posClass: 'node-tr',
    pulseClass: 'pulse-slowest',
    link: '/case-studies/bff-orchestration',
    tooltip: 'BFF Orchestrated UI',
    pathId: 'path-tr'
  },
  {
    id: 'core',
    label: 'Core',
    icon: 'settings_applications',
    posClass: 'node-bl',
    pulseClass: 'pulse-slowest',
    link: '/case-studies/shared-ui-libraries',
    tooltip: 'Shared Platform Libraries',
    pathId: 'path-bl'
  },
  {
    id: 'features',
    label: 'Features',
    icon: 'extension',
    posClass: 'node-br',
    pulseClass: 'pulse-slower',
    tooltip: 'Domain Product Features',
    pathId: 'path-br'
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState(null);

  const handleNodeClick = (link) => {
    if (link) {
      navigate(link, { state: { from: 'hero' } });
    }
  };

  const getPathClass = (pathId) => {
    if (!hoveredNode) return 'arch-line anim-dash';
    if (hoveredNode === 'shell') return 'arch-line anim-dash line-active';
    return hoveredNode === pathId ? 'arch-line anim-dash line-active' : 'arch-line anim-dash line-dimmed';
  };

  return (
    <Section id="hero" className="hero-section">
      <div className="hero-glow-bg"></div>

      <div className="hero-container">
        {/* Left Side Content */}
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp} className="hero-headline">
            Building scalable frontend systems<br />
            for complex products
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-subheadline">
            Frontend Developer / Product Engineer
          </motion.p>

          <motion.div variants={fadeUp} className="hero-ctas">
            <motion.a
              href="#case-studies"
              className="btn btn-primary"
              whileHover={motionProp({ scale: 1.02 })}
              whileTap={motionProp({ scale: 0.98 })}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Case Studies
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={motionProp({ scale: 1.02 })}
              whileTap={motionProp({ scale: 0.98 })}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="credibility-strip">
            <span className="credibility-label">Worked with:</span>
            <div className="credibility-logos">
              <span>GE HealthCare</span>
              <span className="dot">•</span>
              <span>QBurst</span>
              <span className="dot">•</span>
              <span>Infosys</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Architecture Panel */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="arch-panel" aria-hidden="true">
            {/* SVG Connections */}
            <svg className="arch-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="var(--accent-light)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.4" />
                </linearGradient>
                {/* Note: nodeGlow removed from moving packets to optimize animation performance */}
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="lineGlow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection Lines (Static Grid Base) */}
              <path className="arch-line-static" d="M20 25 L80 25" />
              <path className="arch-line-static" d="M20 75 L80 75" />
              <path className="arch-line-static" d="M20 25 L20 75" />
              <path className="arch-line-static" d="M80 25 L80 75" />

              {/* Animated Connection Lines */}
              <path className={getPathClass('path-tl')} d="M50 50 L20 25" filter={hoveredNode === 'path-tl' || hoveredNode === 'shell' ? "url(#lineGlow)" : ""} />
              <path className={getPathClass('path-tr')} style={{ animationDirection: 'reverse', animationDuration: '25s' }} d="M50 50 L80 25" filter={hoveredNode === 'path-tr' || hoveredNode === 'shell' ? "url(#lineGlow)" : ""} />
              <path className={getPathClass('path-bl')} style={{ animationDuration: '18s' }} d="M50 50 L20 75" filter={hoveredNode === 'path-bl' || hoveredNode === 'shell' ? "url(#lineGlow)" : ""} />
              <path className={getPathClass('path-br')} style={{ animationDirection: 'reverse', animationDuration: '22s' }} d="M50 50 L80 75" filter={hoveredNode === 'path-br' || hoveredNode === 'shell' ? "url(#lineGlow)" : ""} />

              {/* Data Packets (Moving Circles - Bidirectional) Optimized: Removed filters */}
              <g className={`data-packets ${hoveredNode ? 'packets-dimmed' : ''}`}>
                {/* TL - Outbound */}
                <circle r="0.8" fill="var(--accent-light)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M50 50 L20 25" />
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                </circle>
                {/* TL - Inbound */}
                <circle r="0.8" fill="var(--accent-color)">
                  <animateMotion dur="4.2s" repeatCount="indefinite" path="M20 25 L50 50" />
                  <animate attributeName="opacity" values="0;1;0" dur="4.2s" repeatCount="indefinite" />
                </circle>

                {/* TR - Inbound */}
                <circle r="0.8" fill="var(--accent-color)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M80 25 L50 50" />
                  <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
                {/* TR - Outbound */}
                <circle r="0.8" fill="var(--accent-light)">
                  <animateMotion dur="3.8s" repeatCount="indefinite" path="M50 50 L80 25" />
                  <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" />
                </circle>

                {/* BL - Outbound */}
                <circle r="0.8" fill="var(--accent-light)">
                  <animateMotion dur="5s" repeatCount="indefinite" path="M50 50 L20 75" />
                  <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
                </circle>
                {/* BL - Inbound */}
                <circle r="0.8" fill="var(--accent-color)">
                  <animateMotion dur="4.6s" repeatCount="indefinite" path="M20 75 L50 50" />
                  <animate attributeName="opacity" values="0;1;0" dur="4.6s" repeatCount="indefinite" />
                </circle>

                {/* BR - Inbound */}
                <circle r="0.8" fill="var(--accent-color)">
                  <animateMotion dur="4.5s" repeatCount="indefinite" path="M80 75 L50 50" />
                  <animate attributeName="opacity" values="0;1;0" dur="4.5s" repeatCount="indefinite" />
                </circle>
                {/* BR - Outbound */}
                <circle r="0.8" fill="var(--accent-light)">
                  <animateMotion dur="4.8s" repeatCount="indefinite" path="M50 50 L80 75" />
                  <animate attributeName="opacity" values="0;1;0" dur="4.8s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>

            {/* Interactive Nodes */}
            {archNodes.map((node) => (
              <div
                key={node.id}
                className={`arch-node ${node.posClass} group ${node.link ? 'clickable-node' : ''} ${hoveredNode && hoveredNode !== node.pathId && hoveredNode !== 'shell' && node.id !== 'shell' ? 'node-dimmed' : ''}`}
                onMouseEnter={() => setHoveredNode(node.id === 'shell' ? 'shell' : node.pathId)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => handleNodeClick(node.link)}
              >
                <div className={`${node.isLarge ? 'node-icon-wrapper' : 'node-icon-wrapper-small'} ${node.pulseClass} node-interactive-bg`}>
                  <span className={`material-symbols-outlined ${node.isLarge ? 'node-icon' : 'node-icon-small'}`}>
                    {node.icon}
                  </span>
                </div>
                <span className={node.isLarge ? 'node-label' : 'node-label-small'}>{node.label}</span>

                {/* Tooltip */}
                <div className={`node-tooltip ${node.posClass.includes('tr') || node.posClass.includes('br') ? 'tooltip-left' : 'tooltip-right'}`}>
                  <span className="tooltip-text">{node.tooltip}</span>
                  {node.link && (
                    <span className="tooltip-hint" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px', fontStyle: 'italic' }}>
                      Click node to read writeup
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Subtle overlay gradients for depth */}
            <div className="panel-overlay-glow"></div>
            <div className="panel-overlay-fade"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
