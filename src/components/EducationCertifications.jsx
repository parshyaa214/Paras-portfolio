import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import './EducationCertifications.css';

const educationData = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'D Y Patil Education Society School of Engineering and Management',
    location: 'Kolhapur, Maharashtra',
    period: '2025 – 2029',
    status: 'Second Year – Semester 3',
    score: 'CGPA 9.02',
    isCurrent: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC) – Science Stream',
    institution: 'Shri Tripura Junior Science College',
    location: 'Latur, Maharashtra',
    period: '2022 – 2024',
    status: 'Completed',
    score: null,
    isCurrent: false,
  },
];

const certificationData = [
  {
    title: 'AI-ML Virtual Internship',
    issuer: 'Google for Developers / AICTE / EduSkills',
    period: 'October – December 2025',
    grade: 'Grade: Outstanding',
    highlight: true,
  },
  {
    title: 'Process Intelligence Fundamentals',
    issuer: 'Celonis Academy',
    period: 'October 2026',
    grade: 'Completed Certification',
    highlight: false,
  },
  {
    title: 'Energy Literacy Training',
    issuer: 'Energy Swaraj Foundation',
    period: 'October 2026',
    grade: 'Completed Training',
    highlight: false,
  },
];

export default function EducationCertifications() {
  return (
    <section className="section-wrapper editorial-edu-cert">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-edu-cert__header">
          <p className="section-label">Academic &amp; Professional Growth</p>
          <h2 className="section-heading">Education &amp; Credentials</h2>
        </div>

        <div className="editorial-edu-cert__columns">
          {/* COLUMN 1: Education */}
          <motion.div
            className="editorial-edu-cert__col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="editorial-edu-cert__col-header">
              <div className="editorial-edu-cert__col-icon">
                <GraduationCap size={20} />
              </div>
              <h3 className="editorial-edu-cert__col-title font-heading">
                Formal Education
              </h3>
            </div>

            <div className="editorial-edu-cert__items">
              {educationData.map((edu, idx) => (
                <div key={idx} className="editorial-edu-card">
                  <div className="editorial-edu-card__top">
                    <span className="editorial-edu-card__period font-body">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="editorial-edu-card__score font-heading">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <h4 className="editorial-edu-card__degree font-serif">
                    {edu.degree}
                  </h4>
                  <p className="editorial-edu-card__inst font-body">
                    {edu.institution}
                  </p>
                  <p className="editorial-edu-card__loc font-body">
                    {edu.location}
                  </p>

                  <div className="editorial-edu-card__footer">
                    <span className="editorial-edu-card__badge font-heading">
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Certifications */}
          <motion.div
            className="editorial-edu-cert__col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="editorial-edu-cert__col-header">
              <div className="editorial-edu-cert__col-icon editorial-edu-cert__col-icon--cert">
                <Award size={20} />
              </div>
              <h3 className="editorial-edu-cert__col-title font-heading">
                Certifications &amp; Training
              </h3>
            </div>

            <div className="editorial-edu-cert__items">
              {certificationData.map((cert, idx) => (
                <div key={idx} className="editorial-cert-card">
                  <div className="editorial-cert-card__top">
                    <CheckCircle2 size={18} className="editorial-cert-card__check" />
                    <span className="editorial-cert-card__period font-body">
                      {cert.period}
                    </span>
                  </div>

                  <h4 className="editorial-cert-card__title font-serif">
                    {cert.title}
                  </h4>
                  <p className="editorial-cert-card__issuer font-body">
                    {cert.issuer}
                  </p>

                  <div className="editorial-cert-card__footer">
                    <span className="editorial-cert-card__grade font-heading">
                      {cert.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
