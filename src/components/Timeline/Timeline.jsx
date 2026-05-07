import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import './Timeline.css';

const milestones = [
  { 
    year: '2019', 
    title: 'Full Stack Foundations',
    content: (
      <>
        <p>Built robust backend services and traditional web applications, gaining a deep understanding of data modeling, APIs, and the full HTTP request lifecycle.</p>
      </>
    )
  },
  { 
    year: '2021', 
    title: 'Frontend Systems Focus',
    content: (
      <>
        <p>Transitioned entirely into the frontend ecosystem. Focused heavily on React, state management patterns, and building complex single-page applications at scale.</p>
      </>
    )
  },
  { 
    year: '2022', 
    title: 'Platform Engineering',
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
        <motion.div 
          className="timeline-line"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        <div className="timeline-grid">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              className={`milestone-card ${milestone.highlight ? 'highlight' : ''}`}
            >
              <div className="milestone-content">
                <span className="milestone-year">{milestone.year}</span>
                <h3 className="milestone-title">{milestone.title}</h3>
                <div className="editorial-content mt-3">
                  {milestone.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Timeline;
