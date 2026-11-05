import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, Award, Clock } from 'lucide-react';
import './Experience.css';

const achievements = [
  {
    icon: TrendingUp,
    text: 'Exceeded quarterly sales targets by 28% through structured customer follow-ups and performance analysis.',
  },
  {
    icon: Users,
    text: 'Leveraged CRM tools and Excel data to segment leads, track pipeline velocity, and enhance client retention.',
  },
  {
    icon: Clock,
    text: 'Proposed and implemented a customer onboarding process enhancement that reduced onboarding turnaround time by 35%.',
  },
  {
    icon: Award,
    text: 'Awarded Best Sales Executive of the Month for April and July in recognition of exceptional quota attainment.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper editorial-experience">
      <div className="container">
        {/* Header */}
        <div className="editorial-experience__header">
          <p className="section-label">My professional journey.</p>
          <h2 className="section-heading">Work Experience &amp; Leadership</h2>
        </div>

        {/* Editorial Timeline / Card Layout */}
        <motion.div
          className="editorial-experience__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Banner */}
          <div className="editorial-experience__top">
            <div className="editorial-experience__role-info">
              <div className="editorial-experience__badge font-heading">
                <Briefcase size={16} />
                <span>Automotive Industry</span>
              </div>
              <h3 className="editorial-experience__company font-serif">
                TVS Motor Company
              </h3>
              <p className="editorial-experience__title font-heading">
                Sales Executive
              </p>
            </div>

            <div className="editorial-experience__date-badge font-body">
              <span>October 2024 – August 2025</span>
              <span className="editorial-experience__duration font-heading">11 Months</span>
            </div>
          </div>

          {/* Narrative Summary */}
          <p className="editorial-experience__summary font-body">
            During my tenure at TVS Motor Company, I combined customer communication with
            data-oriented analysis to streamline sales pipelines, automate onboarding workflows, and
            drive team performance.
          </p>

          {/* Key Achievements Grid */}
          <div className="editorial-experience__achievements">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="editorial-experience__achieve-item">
                  <div className="editorial-experience__achieve-icon">
                    <Icon size={18} />
                  </div>
                  <p className="editorial-experience__achieve-text font-body">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transferable Skills Tags */}
          <div className="editorial-experience__skills">
            <span className="tag">CRM Systems</span>
            <span className="tag">Data Analysis with Excel</span>
            <span className="tag">Process Optimization</span>
            <span className="tag">Client Consultation</span>
            <span className="tag">Team Collaboration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
