import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Skills from './components/Skills';
import GitHub from './components/GitHub';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import NCC from './components/NCC';
import BeyondScreen from './components/BeyondScreen';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection, useScrollReveal } from './hooks';
import './styles/global.css';
import './styles/animations.css';

const SECTION_IDS = [
  'home',
  'about',
  'journey',
  'projects',
  'playground',
  'skills',
  'experience',
  'ncc',
  'contact',
];

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const activeSection = useActiveSection(SECTION_IDS);
  useScrollReveal();

  // Dismiss preloader after initial branding presentation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Editorial Monogram Splash Preloader */}
      <AnimatePresence>
        {showPreloader && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Ctrl + K Command Palette */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Playground />
        <Skills />
        <GitHub />
        <Experience />
        <EducationCertifications />
        <NCC />
        <BeyondScreen />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
