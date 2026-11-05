import { Award } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    id: '01',
    title: 'AI-ML Virtual Internship',
    issuer: 'Google for Developers / AICTE / EduSkills',
    period: 'October – December 2025',
    grade: 'Outstanding',
    type: 'Internship',
  },
  {
    id: '02',
    title: 'Process Intelligence Fundamentals',
    issuer: 'Celonis Academy',
    period: 'October 2026',
    grade: null,
    type: 'Certification',
  },
  {
    id: '03',
    title: 'Energy Literacy Training',
    issuer: 'Energy Swaraj Foundation',
    period: 'October 2026',
    grade: null,
    type: 'Training',
  },
];

export default function Certifications() {
  return (
    <section className="section-wrapper certifications">
      <div className="container">
        <p className="section-label reveal">05 // Certifications</p>
        <h2 className="section-heading reveal delay-1">Credentials &amp; Training</h2>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <article
              key={cert.id}
              className={`cert-card reveal delay-${i + 1}`}
              aria-label={cert.title}
            >
              <div className="cert-card__header">
                <div className="cert-card__icon" aria-hidden="true">
                  <Award size={16} />
                </div>
                <div>
                  <span className="cert-card__type font-mono">{cert.type}</span>
                  <span className="cert-card__id font-mono">{cert.id}</span>
                </div>
              </div>

              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer font-mono">{cert.issuer}</p>

              <div className="cert-card__footer">
                <span className="cert-card__period font-mono">{cert.period}</span>
                {cert.grade && (
                  <span className="cert-card__grade">Grade: {cert.grade}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
