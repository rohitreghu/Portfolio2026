import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Lazy load heavy/below-the-fold components
const Timeline = lazy(() => import('../components/Timeline/Timeline'));
const Expertise = lazy(() => import('../components/Expertise/Expertise'));
const CaseStudies = lazy(() => import('../components/CaseStudies/CaseStudies'));
const Philosophy = lazy(() => import('../components/Philosophy/Philosophy'));
const Contact = lazy(() => import('../components/Contact/Contact'));

// Section-level spinner — visually unchanged
const SectionLoader = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: 30, height: 30, border: '2px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--accent-color)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
  </div>
);

const Home = () => {
  useDocumentTitle('Rohit Reghu | Senior Frontend Engineer');

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        {/* ErrorBoundary catches failures in any of the lazy-loaded sections */}
        <ErrorBoundary minHeight="50vh">
          <Suspense fallback={<SectionLoader />}>
            <Timeline />
            <Expertise />
            <CaseStudies />
            <Philosophy />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
