import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  User,
  GitCommit,
  FolderGit2,
  Code2,
  Wrench,
  FileDown,
  Mail,
  ExternalLink,
  Search,
  X,
  Shield,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './CommandPalette.css';

const COMMANDS = [
  { id: 'home', label: 'Home', icon: Home, section: 'home', desc: 'Jump to top intro' },
  { id: 'about', label: 'About', icon: User, section: 'about', desc: 'Background & education' },
  { id: 'journey', label: 'Journey', icon: GitCommit, section: 'journey', desc: 'Milestones & experience' },
  { id: 'projects', label: 'Projects', icon: FolderGit2, section: 'projects', desc: 'Selected project showcase' },
  { id: 'playground', label: 'Playground', icon: Code2, section: 'playground', desc: 'Interactive CS algorithm demo' },
  { id: 'skills', label: 'Skills', icon: Wrench, section: 'skills', desc: 'Technical skills & stack' },
  { id: 'ncc', label: 'NCC (National Cadet Corps)', icon: Shield, section: 'ncc', desc: 'CATC Camp – 5 MAH Battalion, Kolhapur' },
  { id: 'contact', label: 'Contact', icon: Mail, section: 'contact', desc: 'Get in touch directly' },
  { id: 'resume', label: 'Download Resume', icon: FileDown, action: 'resume', desc: 'Download official PDF' },
  { id: 'github', label: 'GitHub Profile', icon: GithubIcon, action: 'github', desc: 'Visit github.com/parshyaa214' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.desc.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeCommand = (cmd) => {
    if (cmd.section) {
      document.getElementById(cmd.section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd.action === 'resume') {
      window.open('/resume/Paras_Ram_Chavan_Resume.pdf', '_blank');
    } else if (cmd.action === 'github') {
      window.open('https://github.com/parshyaa214', '_blank');
    }
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        executeCommand(filtered[selectedIndex]);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="editorial-palette-backdrop" onClick={onClose}>
        <motion.div
          className="editorial-palette"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
        >
          {/* Search Header */}
          <div className="editorial-palette__search-box">
            <Search size={18} className="editorial-palette__search-icon" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or jump to section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="editorial-palette__input font-body"
            />
            <span className="editorial-palette__esc-tag font-heading">ESC</span>
          </div>

          {/* Commands List */}
          <div className="editorial-palette__list">
            {filtered.length === 0 ? (
              <div className="editorial-palette__empty font-body">
                No matching destination or command found.
              </div>
            ) : (
              filtered.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => executeCommand(cmd)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`editorial-palette__item ${isSelected ? 'is-selected' : ''}`}
                  >
                    <div className="editorial-palette__item-icon">
                      <Icon size={16} />
                    </div>
                    <div className="editorial-palette__item-text">
                      <span className="editorial-palette__item-label font-heading">
                        {cmd.label}
                      </span>
                      <span className="editorial-palette__item-desc font-body">
                        {cmd.desc}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="editorial-palette__enter-tag font-heading">
                        ENTER ↵
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Palette Footer */}
          <div className="editorial-palette__footer font-body">
            <span>Use ↑ ↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to dismiss</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
