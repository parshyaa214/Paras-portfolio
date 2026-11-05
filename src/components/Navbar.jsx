import { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'journey',    label: 'Journey' },
  { id: 'projects',   label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'skills',     label: 'Skills' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar({ activeSection, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`editorial-nav ${scrolled ? 'editorial-nav--scrolled' : ''}`}>
      <div className="editorial-nav__container">
        {/* Left: PRC Monogram + Name */}
        <button
          className="editorial-nav__brand"
          onClick={() => scrollTo('home')}
          aria-label="Scroll to home"
        >
          <div className="editorial-nav__monogram-badge">
            <span className="editorial-nav__monogram-letters font-heading">PRC</span>
          </div>
          <span className="editorial-nav__brand-name font-heading">PARAS CHAVAN</span>
        </button>

        {/* Right Navigation */}
        <nav className="editorial-nav__desktop" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`editorial-nav__link font-heading ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
                <span className="editorial-nav__underline" aria-hidden="true" />
              </button>
            );
          })}

          {/* Quick Command Palette Trigger Button */}
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              className="editorial-nav__palette-trigger font-heading"
              aria-label="Open command search (Ctrl+K)"
              title="Quick Search (Ctrl + K)"
            >
              <Command size={13} />
              <span>K</span>
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="editorial-nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`editorial-nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        <div className="editorial-nav__mobile-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`editorial-nav__mobile-link font-serif ${activeSection === link.id ? 'is-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
          {onOpenPalette && (
            <button
              onClick={() => { setMenuOpen(false); onOpenPalette(); }}
              className="btn btn-secondary"
              style={{ marginTop: 20 }}
            >
              <Command size={15} />
              <span>Search (Ctrl + K)</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
