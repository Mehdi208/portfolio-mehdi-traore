import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AppProvider } from './context/AppContext';
import { LandingPage } from './pages/LandingPage';
import { ProjectsCatalogPage } from './pages/ProjectsCatalogPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// ScrollToTop component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projets" element={<ProjectsCatalogPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
