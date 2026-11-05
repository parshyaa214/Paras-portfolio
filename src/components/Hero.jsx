import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, FileText, Sparkles, Award } from 'lucide-react';
import './Hero.css';

const SUBTITLES = [
  'Computer Science Engineering Student',
  'Software Developer',
  'Technology Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="editorial-hero">
      {/* Background Soft Ambient Gradient & Organic Blobs */}
      <div className="editorial-hero__bg-shapes" aria-hidden="true">
        <div className="editorial-hero__ambient-gradient" />
        <div className="editorial-hero__blob editorial-hero__blob--1 organic-blob-1" />
        <div className="editorial-hero__blob editorial-hero__blob--2 organic-blob-2" />
      </div>

      <div className="container editorial-hero__grid">
        {/* LEFT COLUMN: Editorial Narrative */}
        <motion.div
          className="editorial-hero__left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability pill */}
          <div className="editorial-hero__status">
            <span className="editorial-hero__status-dot" aria-hidden="true" />
            <span className="font-heading">OPEN TO INTERNSHIP OPPORTUNITIES</span>
          </div>

          {/* Small Intro Greeting */}
          <p className="editorial-hero__eyebrow font-heading">
            HELLO, I'M PARAS
          </p>

          {/* Editorial Main Heading with Full Name PARAS RAM CHAVAN */}
          <h1 className="editorial-hero__title font-serif">
            PARAS RAM <br />
            <span className="editorial-hero__gradient-text">CHAVAN</span>
          </h1>

          {/* Animated Changing Subtitle */}
          <div className="editorial-hero__subtitle-wrapper">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtitleIndex}
                className="editorial-hero__subtitle font-heading"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                — {SUBTITLES[subtitleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Narrative Introduction */}
          <p className="editorial-hero__description font-body">
            I'm Paras Ram Chavan, a Computer Science Engineering student passionate about
            building practical software, exploring emerging technologies, and turning ideas
            into meaningful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="editorial-hero__actions">
            <button onClick={scrollToProjects} className="btn btn-primary">
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={15} />
            </button>
            <a
              href="/resume/Paras_Ram_Chavan_Resume.pdf"
              download
              className="btn btn-secondary"
            >
              <FileText size={15} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="editorial-hero__highlights">
            <div className="editorial-hero__highlight-item">
              <span className="editorial-hero__highlight-value font-serif">9.02</span>
              <span className="editorial-hero__highlight-label font-body">Academic CGPA</span>
            </div>
            <div className="editorial-hero__highlight-divider" />
            <div className="editorial-hero__highlight-item">
              <span className="editorial-hero__highlight-value font-serif">08+</span>
              <span className="editorial-hero__highlight-label font-body">Practical Projects</span>
            </div>
            <div className="editorial-hero__highlight-divider" />
            <div className="editorial-hero__highlight-item">
              <span className="editorial-hero__highlight-value font-serif">B.Tech</span>
              <span className="editorial-hero__highlight-label font-body">CSE 2nd Year</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Editorial Portrait with Floating Info Cards */}
        <motion.div
          className="editorial-hero__right"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editorial-hero__portrait-scene">
            {/* Organic Pastel Backdrop Shapes */}
            <div className="editorial-hero__portrait-backdrop organic-blob-1" aria-hidden="true" />
            <div className="editorial-hero__portrait-ring organic-blob-2" aria-hidden="true" />

            {/* Editorial Portrait Frame */}
            <div className="editorial-hero__portrait-frame">
              <img
                src="/images/parasimage.jpg"
                alt="Paras Ram Chavan — Computer Science Engineering Student"
                className="editorial-hero__portrait-img"
                loading="eager"
              />
              <div className="editorial-hero__portrait-overlay" aria-hidden="true" />
            </div>

            {/* Floating Information Card 1: College & Degree */}
            <motion.div
              className="editorial-hero__floating-card editorial-hero__floating-card--top font-heading"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Sparkles size={16} className="editorial-hero__sparkle" />
              <div>
                <p className="editorial-hero__floating-title">Computer Science</p>
                <p className="editorial-hero__floating-subtitle">D Y Patil, Kolhapur</p>
              </div>
            </motion.div>

            {/* Floating Information Card 2: CGPA Distinction */}
            <motion.div
              className="editorial-hero__floating-card editorial-hero__floating-card--bottom font-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <Award size={16} className="editorial-hero__award" />
              <div>
                <p className="editorial-hero__floating-title">CGPA 9.02</p>
                <p className="editorial-hero__floating-subtitle">High Distinction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
