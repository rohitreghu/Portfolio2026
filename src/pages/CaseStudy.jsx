import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudiesMap } from '../data/caseStudies';
import { makeStagger, makeFadeUp } from '../utils/animations';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './CaseStudy.css';
import Footer from '../components/Footer/Footer';

const fadeUp = makeFadeUp(30, 0.6);
const staggerContainer = makeStagger(0.15);

const CaseStudy = () => {
  const { slug } = useParams();
  const location = useLocation();
  const data = caseStudiesMap[slug];

  // Set page-specific document title; falls back gracefully if slug not found
  useDocumentTitle(data ? `${data.cardTitle} | Rohit Reghu` : 'Rohit Reghu');

  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Determine where to link back based on route state
  const backTargetId = location.state?.from || `cs-${slug}`;

  return (
    <div className="cs-page">
      <nav className="cs-nav">
        <div className="cs-nav-container">
          <Link to={`/#${backTargetId}`} className="cs-back-link">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="cs-main">
        <motion.article 
          className="cs-article"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.header variants={fadeUp} className="cs-article-header">
            <h1 className="cs-article-title">{data.title}</h1>
          </motion.header>

          <motion.div variants={fadeUp} className="cs-article-content editorial-content">
            <section className="cs-section">
              <h2>Overview</h2>
              <p>{data.overview}</p>
            </section>

            <section className="cs-section">
              <h2>Problem Context</h2>
              {data.problemContext}
            </section>

            <section className="cs-section">
              <h2>Architectural Approach</h2>
              {data.architecture}
            </section>

            <section className="cs-section">
              <h2>Engineering Challenges &amp; Tradeoffs</h2>
              {data.challenges}
            </section>

            <section className="cs-section">
              <h2>Outcomes</h2>
              {data.outcomes}
            </section>

            <section className="cs-section">
              <h2>Key Learning</h2>
              <div className="cs-learning-block">
                <p><strong>{data.keyLearning}</strong></p>
              </div>
            </section>
          </motion.div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
