import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GitFork, Star, ExternalLink, Calendar, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './GitHub.css';

// Fallback real repositories in case GitHub API rate limits
const FALLBACK_REPOS = [
  {
    name: 'mahast',
    description: 'Maharashtra State Bus Service Platform — modern transit tracking and ticketing concept.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-03-15T00:00:00Z',
    html_url: 'https://github.com/parshyaa214/mahast',
  },
  {
    name: 'careerguide.com',
    description: 'AI-Powered Career Guidance Web Application for student pathway recommendation.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-02-20T00:00:00Z',
    html_url: 'https://github.com/parshyaa214/careerguide.com',
  },
  {
    name: 'spotlight',
    description: 'Local product and store discovery platform utilizing geospatial map searching.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-28T00:00:00Z',
    html_url: 'https://github.com/parshyaa214/spotlight',
  },
  {
    name: 'apnenotes.com',
    description: 'Digital academic notes and curriculum sharing platform for engineering students.',
    language: 'CSS',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-10T00:00:00Z',
    html_url: 'https://github.com/parshyaa214/apnenotes.com',
  },
];

export default function GitHub() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/parshyaa214/repos?sort=updated&per_page=6');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          }
        }
      } catch (err) {
        // Fall back gracefully to verified repo list
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Recently';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="section-wrapper editorial-github">
      <div className="container">
        {/* Header */}
        <div className="editorial-github__header">
          <p className="section-label">Open Source &amp; Code Activity</p>
          <div className="editorial-github__header-row">
            <div>
              <h2 className="section-heading">My code, my progress.</h2>
              <p className="editorial-github__intro font-body">
                Direct view into my public GitHub repositories and active experiments. Every commit
                reflects a continuous drive to learn, refactor, and build real tools.
              </p>
            </div>

            <a
              href="https://github.com/parshyaa214"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary editorial-github__cta"
            >
              <GithubIcon size={16} />
              <span>Explore My GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Repositories Cards Grid */}
        <div className="editorial-github__grid">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-github__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="editorial-github__card-top">
                <div className="editorial-github__card-icon">
                  <Code2 size={16} />
                </div>
                <ExternalLink size={14} className="editorial-github__card-link-icon" />
              </div>

              <h3 className="editorial-github__repo-name font-heading">
                {repo.name}
              </h3>

              <p className="editorial-github__repo-desc font-body">
                {repo.description || 'Public engineering repository and experimental software.'}
              </p>

              <div className="editorial-github__card-footer">
                {repo.language && (
                  <span className="editorial-github__lang font-body">
                    <span className="editorial-github__lang-dot" />
                    {repo.language}
                  </span>
                )}

                <div className="editorial-github__meta font-body">
                  <span className="editorial-github__date">
                    <Calendar size={12} />
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
