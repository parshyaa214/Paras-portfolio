import './Education.css';

const educations = [
  {
    id: '01',
    degree: 'B.Tech — Computer Science Engineering',
    institution: 'D Y Patil Education Society School of Engineering and Management',
    location: 'Kolhapur, Maharashtra',
    period: '2025 – 2029',
    details: 'Currently Second Year, Semester 3',
    cgpa: '9.02',
    type: 'Undergraduate',
    current: true,
  },
  {
    id: '02',
    degree: 'HSC — Science Stream',
    institution: 'Shri Tripura Junior Science College',
    location: 'Latur, Maharashtra',
    period: '2022 – 2024',
    details: 'Higher Secondary Certificate',
    cgpa: null,
    type: 'Higher Secondary',
    current: false,
  },
];

export default function Education() {
  return (
    <section className="section-wrapper education">
      <div className="container">
        <p className="section-label reveal">06 // Education</p>
        <h2 className="section-heading reveal delay-1">Academic Background</h2>

        <div className="education__list">
          {educations.map((edu, i) => (
            <article
              key={edu.id}
              className={`edu-card reveal delay-${i + 2} ${edu.current ? 'edu-card--current' : ''}`}
              aria-label={edu.degree}
            >
              <div className="edu-card__left">
                <span className="edu-card__id font-mono">{edu.id}</span>
                <span className="edu-card__type font-mono">{edu.type}</span>
                {edu.current && (
                  <span className="edu-card__current-badge font-mono">Current</span>
                )}
              </div>

              <div className="edu-card__content">
                <div className="edu-card__header">
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <span className="edu-card__period font-mono">{edu.period}</span>
                </div>
                <p className="edu-card__institution">{edu.institution}</p>
                <p className="edu-card__location font-mono">{edu.location}</p>

                <div className="edu-card__details">
                  <span className="edu-card__detail">{edu.details}</span>
                  {edu.cgpa && (
                    <span className="edu-card__cgpa">
                      <span className="font-mono edu-card__cgpa-label">CGPA</span>
                      <span className="edu-card__cgpa-value font-display">{edu.cgpa}</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
