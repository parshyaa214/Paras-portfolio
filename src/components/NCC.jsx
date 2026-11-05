import { motion } from 'motion/react';
import { Shield, CheckCircle2, MapPin, Calendar, Flag, Compass, Camera, Users, Target } from 'lucide-react';
import './NCC.css';

export default function NCC() {
  return (
    <section id="ncc" className="section-wrapper editorial-ncc">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-ncc__header">
          <div className="editorial-ncc__badge-row">
            <span className="section-label">Extracurricular Development</span>
            <div className="editorial-ncc__flag-pill">
              <span className="ncc-stripe ncc-stripe--navy" />
              <span className="ncc-stripe ncc-stripe--red" />
              <span className="ncc-stripe ncc-stripe--sky" />
              <span className="ncc-stripe-text font-heading">NCC • 5 MAH BN</span>
            </div>
          </div>

          <div className="editorial-ncc__header-row">
            <div className="editorial-ncc__title-block">
              <p className="editorial-ncc__subheading font-heading">
                My NCC Journey.
              </p>
              <h2 className="section-heading editorial-ncc__heading">
                DISCIPLINE BEYOND THE CLASSROOM.
              </h2>
            </div>
            <p className="editorial-ncc__intro font-body">
              “Being part of the National Cadet Corps has given me an opportunity to experience
              structured training, discipline, and personal development beyond academics. I completed
              a CATC camp with MAH Battalion, Kolhapur, adding a valuable experience to my student journey.”
            </p>
          </div>
        </div>

        {/* Main Content Layout: 2-Column Editorial Grid */}
        <div className="editorial-ncc__grid">
          {/* Left Column: Official Camp Information Card */}
          <motion.div
            className="editorial-ncc__card editorial-ncc__card--main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Tag & Status Badge */}
            <div className="editorial-ncc__card-top">
              <div className="editorial-ncc__org-mark">
                <div className="editorial-ncc__shield-icon">
                  <Shield size={22} />
                </div>
                <div>
                  <span className="editorial-ncc__org-tag font-heading">
                    ORGANIZATION
                  </span>
                  <h3 className="editorial-ncc__org-title font-heading">
                    NATIONAL CADET CORPS
                  </h3>
                </div>
              </div>

              {/* Status Badge */}
              <div className="editorial-ncc__status-badge font-heading">
                <CheckCircle2 size={14} />
                <span>CAMP COMPLETED</span>
              </div>
            </div>

            {/* Camp Name Highlight */}
            <div className="editorial-ncc__camp-highlight">
              <span className="editorial-ncc__camp-label font-heading">TRAINING CAMP</span>
              <h4 className="editorial-ncc__camp-name font-serif">
                CATC – Combined Annual Training Camp
              </h4>
            </div>

            {/* Metadata Grid */}
            <div className="editorial-ncc__meta-grid">
              <div className="editorial-ncc__meta-item">
                <div className="editorial-ncc__meta-icon">
                  <Flag size={16} />
                </div>
                <div>
                  <span className="editorial-ncc__meta-label font-heading">BATTALION</span>
                  <p className="editorial-ncc__meta-val font-body">
                    5 MAH Battalion, Kolhapur
                  </p>
                </div>
              </div>

              <div className="editorial-ncc__meta-item">
                <div className="editorial-ncc__meta-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="editorial-ncc__meta-label font-heading">LOCATION</span>
                  <p className="editorial-ncc__meta-val font-body">
                    Kolhapur, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Core Training Pillars */}
            <div className="editorial-ncc__pillars">
              <p className="editorial-ncc__pillars-title font-heading">
                KEY PILLARS &amp; PERSONAL DEVELOPMENT
              </p>
              <div className="editorial-ncc__pillars-grid">
                <div className="editorial-ncc__pillar">
                  <Target size={16} className="editorial-ncc__pillar-icon" />
                  <div>
                    <h5 className="font-heading">Field Discipline</h5>
                    <p className="font-body">Punctuality, drill obedience, and structured daily routines under camp protocol.</p>
                  </div>
                </div>

                <div className="editorial-ncc__pillar">
                  <Users size={16} className="editorial-ncc__pillar-icon" />
                  <div>
                    <h5 className="font-heading">Team Camaraderie</h5>
                    <p className="font-body">Living and cooperating cohesively in unit squads with fellow cadet peers.</p>
                  </div>
                </div>

                <div className="editorial-ncc__pillar">
                  <Compass size={16} className="editorial-ncc__pillar-icon" />
                  <div>
                    <h5 className="font-heading">Resilience &amp; Focus</h5>
                    <p className="font-body">Building mental fortitude, adaptability, and proactive problem solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Training Timeline & Photo Gallery Slot */}
          <div className="editorial-ncc__right-col">
            {/* Timeline / Milestones Card */}
            <motion.div
              className="editorial-ncc__card editorial-ncc__timeline-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h4 className="editorial-ncc__timeline-title font-serif">
                Camp Training Progression
              </h4>

              <div className="editorial-ncc__timeline-list">
                <div className="editorial-ncc__timeline-step">
                  <div className="editorial-ncc__step-bullet">1</div>
                  <div className="editorial-ncc__step-content">
                    <span className="editorial-ncc__step-tag font-heading">ENROLMENT &amp; PREPARATION</span>
                    <h5 className="font-heading">Battalion Induction</h5>
                    <p className="font-body">Joined unit ranks under 5 MAH Battalion, Kolhapur for physical fitness orientation.</p>
                  </div>
                </div>

                <div className="editorial-ncc__timeline-step">
                  <div className="editorial-ncc__step-bullet">2</div>
                  <div className="editorial-ncc__step-content">
                    <span className="editorial-ncc__step-tag font-heading">RIGOROUS CAMP TRAINING</span>
                    <h5 className="font-heading">CATC Camp Drills</h5>
                    <p className="font-body">Engaged in comprehensive parade drills, field discipline, obstacle navigation, and unit coordination.</p>
                  </div>
                </div>

                <div className="editorial-ncc__timeline-step">
                  <div className="editorial-ncc__step-bullet is-completed">✓</div>
                  <div className="editorial-ncc__step-content">
                    <span className="editorial-ncc__step-tag font-heading">MILESTONE ATTAINED</span>
                    <h5 className="font-heading">Camp Successfully Completed</h5>
                    <p className="font-body">Concluded the CATC camp syllabus with discipline, personal growth, and team spirit.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photo Gallery Archival Slot (Clean Placeholder for personal camp photos) */}
            <motion.div
              className="editorial-ncc__card editorial-ncc__gallery-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="editorial-ncc__gallery-header">
                <div className="editorial-ncc__gallery-icon">
                  <Camera size={18} />
                </div>
                <div>
                  <h4 className="editorial-ncc__gallery-title font-heading">
                    Camp Archival Gallery
                  </h4>
                  <span className="editorial-ncc__gallery-sub font-body">
                    Personal camp documentation gallery
                  </span>
                </div>
              </div>

              {/* NCC Camp Photographs */}
              <div className="editorial-ncc__gallery-slots">
                <div className="editorial-ncc__photo-wrapper">
                  <img
                    src="/images/ncc/ncc-camp-1.jpeg"
                    alt="NCC CATC Camp - 5 MAH Battalion, Kolhapur"
                    className="editorial-ncc__photo-img"
                    loading="lazy"
                  />
                  <div className="editorial-ncc__photo-caption font-heading">
                    CATC Camp • 5 MAH Battalion
                  </div>
                </div>

                <div className="editorial-ncc__photo-wrapper">
                  <img
                    src="/images/ncc/ncc-camp-2.jpeg"
                    alt="NCC Camp Training - Kolhapur"
                    className="editorial-ncc__photo-img"
                    loading="lazy"
                  />
                  <div className="editorial-ncc__photo-caption font-heading">
                    Camp Training • Kolhapur
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
