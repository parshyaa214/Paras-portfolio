import { motion } from 'motion/react';
import { GraduationCap, MapPin, Award, BookOpen, Sparkles, Compass } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper editorial-about">
      <div className="container">
        <div className="editorial-about__grid">
          {/* Left Narrative Column */}
          <motion.div
            className="editorial-about__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">A LITTLE ABOUT ME.</p>
            <h2 className="section-heading">
              Curious mind driven by code, systems, and purposeful creation.
            </h2>

            <div className="editorial-about__text font-body">
              <p>
                I'm currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> at{' '}
                <em>D Y Patil Education Society School of Engineering and Management</em>, Kolhapur.
              </p>
              <p>
                I enjoy exploring technology, understanding how things work, solving programming problems,
                and building practical applications. My interests include software development, web technologies,
                data structures and algorithms, AI/ML, and IoT.
              </p>
            </div>

            {/* Philosophy Statement */}
            <blockquote className="editorial-about__quote">
              <p className="font-serif">
                “Curiosity drives me to explore. Creativity helps me build. Consistency helps me grow.”
              </p>
            </blockquote>
          </motion.div>

          {/* Right Column: Editorial Education & Meta Card */}
          <motion.div
            className="editorial-about__side"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="editorial-about__card">
              <div className="editorial-about__card-header">
                <span className="editorial-about__card-pill font-heading">Academic Profile</span>
                <span className="editorial-about__card-badge font-serif">2025 – 2029</span>
              </div>

              <div className="editorial-about__detail-list">
                <div className="editorial-about__detail-item">
                  <div className="editorial-about__detail-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="editorial-about__detail-title font-heading">B.Tech Computer Science Engineering</h3>
                    <p className="editorial-about__detail-desc">
                      D Y Patil Education Society School of Engineering and Management
                    </p>
                  </div>
                </div>

                <div className="editorial-about__detail-item">
                  <div className="editorial-about__detail-icon">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="editorial-about__detail-title font-heading">Current Semester</h3>
                    <p className="editorial-about__detail-desc">Second Year – Semester 3</p>
                  </div>
                </div>

                <div className="editorial-about__detail-item">
                  <div className="editorial-about__detail-icon">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="editorial-about__detail-title font-heading">Academic Standing</h3>
                    <p className="editorial-about__detail-desc">
                      <strong>9.02 CGPA</strong> (High Distinction)
                    </p>
                  </div>
                </div>

                <div className="editorial-about__detail-item">
                  <div className="editorial-about__detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="editorial-about__detail-title font-heading">Location</h3>
                    <p className="editorial-about__detail-desc">Kolhapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Interests Tags */}
              <div className="editorial-about__topics">
                <p className="editorial-about__topics-label font-heading">Areas of Focus</p>
                <div className="editorial-about__topics-tags">
                  <span className="tag">Software Development</span>
                  <span className="tag">Web Technologies</span>
                  <span className="tag">Data Structures &amp; Algorithms</span>
                  <span className="tag">AI / ML Applications</span>
                  <span className="tag">IoT &amp; Embedded Systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
