import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../Section';
import { caseStudiesArray } from '../../data/caseStudies';
import { makeStagger, makeFadeUp, motionProp } from '../../utils/animations';
import './CaseStudies.css';

const staggerContainer = makeStagger(0.2);
const fadeUp = makeFadeUp(40, 0.8);

const CaseStudies = () => {
  return (
    <Section id="case-studies" className="case-studies-section">
      <motion.div 
        className="cs-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className="cs-header">
          <h2 className="section-title">Featured Case Studies</h2>
          <p className="cs-header-sub">Deep dives into complex engineering problems and architectural solutions.</p>
        </motion.div>

        <div className="cs-list">
          {caseStudiesArray.map((cs) => (
            <motion.div 
              key={cs.id} 
              id={`cs-${cs.slug}`}
              variants={fadeUp}
              className={`cs-block ${cs.reverse ? 'cs-reverse' : ''}`}
            >
              <div className="cs-visual">
                <div className="cs-diagram-box">
                  <div className="cs-diagram-glow"></div>
                  <div className="cs-diagram-grid"></div>
                  
                  {cs.id === 1 ? (
                    <div className="mfe-stack">
                      <div className="mfe-stack-layer mfe-shell-top">Shell Application</div>
                      <div className="mfe-stack-middle">
                        <div className="mfe-stack-node">Auth MFE</div>
                        <div className="mfe-stack-node">Workflow MFE</div>
                        <div className="mfe-stack-node">Reporting MFE</div>
                      </div>
                      <div className="mfe-stack-layer mfe-shared-bottom">Shared Platform Layer</div>
                    </div>
                  ) : cs.id === 2 ? (
                    <div className="cs-diagram-nodes-2">
                       <div className="diag-node diag-socket">Product Apps</div>
                       <div className="diag-data-stream stream-reverse">
                         <div className="diag-dot"></div>
                         <div className="diag-dot"></div>
                         <div className="diag-dot"></div>
                       </div>
                       <div className="diag-worker-box">
                         <div className="diag-node diag-worker">@platform/ui</div>
                         <div className="diag-node diag-webgl">@platform/core</div>
                       </div>
                    </div>
                  ) : (
                    <div className="bff-layout">
                      <div className="bff-col">
                        <div className="bff-node">Web Client</div>
                        <div className="bff-node">Mobile</div>
                      </div>
                      <div className="bff-arrow">
                        <div className="diag-data-stream-wrapper">
                          <div className="diag-data-stream">
                            <div className="diag-dot"></div>
                            <div className="diag-dot"></div>
                          </div>
                          <div className="diag-data-stream stream-reverse">
                            <div className="diag-dot stream-color-alt"></div>
                            <div className="diag-dot stream-color-alt"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bff-col">
                        <div className="bff-node bff-main">Node.js BFF</div>
                      </div>
                      <div className="bff-arrow">
                        <div className="diag-data-stream-wrapper">
                          <div className="diag-data-stream">
                            <div className="diag-dot"></div>
                            <div className="diag-dot"></div>
                          </div>
                          <div className="diag-data-stream stream-reverse">
                            <div className="diag-dot stream-color-alt"></div>
                            <div className="diag-dot stream-color-alt"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bff-col">
                        <div className="bff-node bff-microservice">Auth API</div>
                        <div className="bff-node bff-microservice">Data API</div>
                        <div className="bff-node bff-microservice">Core API</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="cs-content">
                <div className="cs-meta">Case Study 0{cs.id}</div>
                <h3 className="cs-title">{cs.cardTitle}</h3>
                <p className="cs-subtitle">{cs.subtitle}</p>
                
                <div className="cs-details">
                  <div className="cs-detail-item">
                    <h4 className="cs-detail-label">The Problem</h4>
                    <div className="editorial-content">
                      {cs.problem}
                    </div>
                  </div>
                  
                  <div className="cs-detail-item">
                    <h4 className="cs-detail-label">Architectural Approach</h4>
                    <div className="editorial-content">
                      {cs.solution}
                    </div>
                  </div>
                  
                  <div className="cs-detail-item">
                    <h4 className="cs-detail-label">The Impact</h4>
                    <div className="editorial-content">
                      {cs.impact}
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={motionProp({ scale: 1.02, x: 5 })}
                  whileTap={motionProp({ scale: 0.98 })}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ display: 'inline-block' }}
                >
                  <Link 
                    to={`/case-studies/${cs.slug}`}
                    state={{ from: `cs-${cs.slug}` }}
                    className="cs-action-btn"
                    style={{ display: 'inline-flex', textDecoration: 'none' }}
                  >
                    {cs.ctaText}
                    <span className="material-symbols-outlined btn-icon-right">arrow_forward</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default CaseStudies;
