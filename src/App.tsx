import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Technologies from './pages/Technologies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('nexora-splash');
    if (seen) setShowSplash(false);
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('nexora-splash', '1');
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <AnimatedBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
              <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
              <Route path="/solutions/:slug" element={<PageTransition><SolutionDetail /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/portfolio/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
              <Route path="/technologies" element={<PageTransition><Technologies /></PageTransition>} />
              <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              <Route path="/team/:slug" element={<PageTransition><TeamMember /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
