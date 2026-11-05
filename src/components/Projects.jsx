import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import './Projects.css';

// Editorial pastel themes for each project preview
const previewThemes = {
  '01': { bg: 'linear-gradient(135deg, #E6F0EB 0%, #D4E5DB 100%)', accent: '#4E735B', type: 'Public Transit Web Platform' },
  '02': { bg: 'linear-gradient(135deg, #E8EFF7 0%, #D8E5F3 100%)', accent: '#436B95', type: 'AI Career Guidance App' },
  '03': { bg: 'linear-gradient(135deg, #F5EDE6 0%, #EBDDCF 100%)', accent: '#8E5E3D', type: 'Citizen Welfare & Survey' },
  '04': { bg: 'linear-gradient(135deg, #F3EEF9 0%, #E5DCF2 100%)', accent: '#6B528D', type: 'Location Discovery Platform' },
  '05': { bg: 'linear-gradient(135deg, #FBF3E8 0%, #F5E5CE 100%)', accent: '#9C6F36', type: 'Event Booking Marketplace' },
  '06': { bg: 'linear-gradient(135deg, #E8F4F1 0%, #D4EBE6 100%)', accent: '#3E7B70', type: 'Notes Sharing Repository' },
  '07': { bg: 'linear-gradient(135deg, #EEF1E8 0%, #E0E7D6 100%)', accent: '#5C6E44', type: 'Hardware & IoT System' },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper editorial-projects">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-projects__header">
          <p className="section-label">Ideas I've turned into projects.</p>
          <div className="editorial-projects__header-row">
            <h2 className="section-heading">Featured Projects &amp; Experiments</h2>
            <p className="editorial-projects__intro font-body">
              A curated selection of real-world software, web applications, and embedded IoT experiments.
              Click any project card to open an in-depth case study.
            </p>
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <div className="editorial-projects__grid">
          {projects.map((project, index) => {
            const theme = previewThemes[project.id] || previewThemes['01'];
            const isFeatured = project.size === 'large';

            return (
              <motion.article
                key={project.id}
                className={`editorial-card ${isFeatured ? 'editorial-card--featured' : ''}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                {/* Visual Preview Area */}
                <div
                  className="editorial-card__visual"
                  style={{ background: theme.bg }}
                >
                  <div className="editorial-card__visual-ambient" />

                  <div className="editorial-card__top-bar">
                    <span
                      className="editorial-card__type-pill font-heading"
                      style={{ color: theme.accent, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {theme.type}
                    </span>
                    <span className="editorial-card__view-cta font-heading">
                      <Eye size={13} />
                      <span>Case Study</span>
                    </span>
                  </div>

                  <div className="editorial-card__artwork">
                    <span className="editorial-card__artwork-index font-serif" style={{ color: theme.accent }}>
                      {project.id}
                    </span>
                    <h4 className="editorial-card__artwork-title font-serif">
                      {project.title}
                    </h4>
                    <p className="editorial-card__artwork-sub font-body">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="editorial-card__body">
                  <div className="editorial-card__meta">
                    <span className="editorial-card__status-dot" aria-hidden="true" />
                    <span className="editorial-card__status font-heading">{project.status}</span>
                  </div>

                  <h3 className="editorial-card__title font-serif">
                    {project.title}
                  </h3>

                  <p className="editorial-card__desc font-body">
                    {project.description}
                  </p>

                  {/* Sub-projects (for IoT experiments) */}
                  {project.subProjects && (
                    <div className="editorial-card__sublist">
                      {project.subProjects.map((sub) => (
                        <div key={sub.name} className="editorial-card__subitem font-body">
                          <span className="editorial-card__subbullet">✦</span>
                          <div>
                            <strong>{sub.name}</strong>
                            <div className="editorial-card__subtags">
                              {sub.tags.map(t => <span key={t} className="tag tag--sm">{t}</span>)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="editorial-card__tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="editorial-card__actions" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-card__link font-heading"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <GithubIcon size={16} />
                        <span>Inspect Repository</span>
                        <ArrowUpRight size={15} className="editorial-card__arrow" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="editorial-card__details-btn font-heading"
                    >
                      Case Study ➔
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal Case Study Popup */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
