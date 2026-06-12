import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready after navigation
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 10);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Fallback loader — visually unchanged
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
    <div style={{ width: 40, height: 40, border: '3px solid var(--border-medium)', borderTopColor: 'var(--accent-color)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      {/* ErrorBoundary wraps the Suspense so chunk-load failures are caught */}
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
