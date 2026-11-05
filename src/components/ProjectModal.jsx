import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="editorial-modal-backdrop" onClick={onClose}>
        <motion.div
          className="editorial-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            className="editorial-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="editorial-modal__header">
            <span className="editorial-modal__category font-heading">
              {project.category || 'Engineering Project'}
            </span>
            <h3 id="modal-title" className="editorial-modal__title font-serif">
              {project.title}
            </h3>
            <p className="editorial-modal__subtitle font-body">
              {project.subtitle}
            </p>

            <div className="editorial-modal__status-row">
              <span className="editorial-modal__status-dot" />
              <span className="editorial-modal__status-text font-heading">
                Status: {project.status}
              </span>
            </div>
          </div>

          <div className="editorial-modal__scrollable">
            {/* Problem & Solution Dual Grid */}
            <div className="editorial-modal__narrative-grid">
              <div className="editorial-modal__narrative-card">
                <div className="editorial-modal__card-tag font-heading">
                  <AlertCircle size={15} color="#9C6F36" />
                  <span>The Challenge</span>
                </div>
                <p className="font-body">{project.problem}</p>
              </div>

              <div className="editorial-modal__narrative-card">
                <div className="editorial-modal__card-tag font-heading">
                  <CheckCircle2 size={15} color="#4E735B" />
                  <span>The Solution</span>
                </div>
                <p className="font-body">{project.solution}</p>
              </div>
            </div>

            {/* Key Features List */}
            {project.features && (
              <div className="editorial-modal__section">
                <h4 className="editorial-modal__section-title font-heading">
                  Key Features &amp; Architecture
                </h4>
                <ul className="editorial-modal__features-list">
                  {project.features.map((feat, i) => (
                    <li key={i} className="editorial-modal__feature font-body">
                      <span className="editorial-modal__feature-bullet">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="editorial-modal__section">
              <h4 className="editorial-modal__section-title font-heading">
                Technologies Used
              </h4>
              <div className="editorial-modal__tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="editorial-modal__footer">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <GithubIcon size={16} />
                <span>View GitHub Repository</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="editorial-modal__note font-body">
                Hardware / Internal prototype repository
              </span>
            )}
            <button onClick={onClose} className="btn btn-secondary">
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
