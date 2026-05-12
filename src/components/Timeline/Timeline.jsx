import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import './Timeline.css';

const milestones = [
  { 
    year: '2019', 
    title: 'Full Stack Foundations',
    icon: 'dns',
    chips: ['APIs', 'Java', 'Systems'],
    content: (
      <>
        <p>Built robust backend services and traditional web applications, gaining a deep understanding of data modeling, APIs, and the full HTTP request lifecycle.</p>
      </>
    )
  },
  { 
    year: '2021', 
    title: 'Frontend Systems Focus',
    icon: 'view_quilt',
    chips: ['React', 'SPA', 'State'],
    content: (
      <>
        <p>Transitioned entirely into the frontend ecosystem. Focused heavily on React, state management patterns, and building complex single-page applications at scale.</p>
      </>
    )
  },
  { 
    year: '2022', 
    title: 'Platform Engineering',
    icon: 'account_tree',
    chips: ['Design Systems', 'Platform', 'MFE'],
    content: (
      <>
        <p>Spearheaded internal platform initiatives. Architected design systems and core UI libraries utilized by dozens of engineers across multiple product squads.</p>
      </>
    )
  },
  { 
    year: 'Today', 
    title: 'Product Architecture & AI', 
    highlight: true,
    icon: 'psychology',
    chips: ['AI', 'Architecture', 'LLMs'],
    content: (
      <>
        <p>Currently focused on massive-scale microfrontend migrations and exploring the integration of LLMs to dramatically accelerate user workflows.</p>
      </>
    )
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section id="timeline" className="timeline-section">
      <motion.div 
        className="timeline-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Horizontal progression line (visible on desktop) */}
        <div className="timeline-line-wrapper">
          <motion.div 
            className="timeline-line-base"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          <div 
            className="timeline-line-active"
            style={{
              transform: hoveredIndex !== null ? `scaleX(${(hoveredIndex + 0.5) / milestones.length})` : 'scaleX(0)'
            }}
          ></div>
          <div className="timeline-line-glow"></div>
        </div>
        
        <div className={`timeline-grid ${hoveredIndex !== null ? 'has-hover' : ''}`}>
          {milestones.map((milestone, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div 
                key={index} 
                variants={cardVariant}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`milestone-card ${milestone.highlight ? 'highlight' : ''} ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
              >
                <div className="milestone-texture"></div>
                
                <div className="milestone-icon-corner">
                  <span className="material-symbols-outlined">{milestone.icon}</span>
                </div>

                <div className="milestone-content">
                  <span className="milestone-year">
                    {milestone.highlight && <span className="pulse-dot"></span>}
                    {milestone.year}
                  </span>
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <div className="editorial-content mt-3">
                    {milestone.content}
                  </div>

                  <div className="milestone-chips">
                    {milestone.chips.map((chip, i) => (
                      <span key={i} className="chip">{chip}</span>
                    ))}
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

export default Timeline;
