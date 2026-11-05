import { motion } from 'motion/react';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import { journeyMilestones } from '../data/journey';
import './Journey.css';

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper editorial-journey">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-journey__header">
          <p className="section-label">Milestones &amp; Evolution</p>
          <div className="editorial-journey__header-row">
            <h2 className="section-heading">
              The journey so far.
            </h2>
            <p className="editorial-journey__intro font-body">
              A personal timeline capturing my progression from early industry experience to
              computer science foundations and purposeful software engineering.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="editorial-journey__timeline">
          {/* Continuous Center Track */}
          <div className="editorial-journey__track" aria-hidden="true" />

          {journeyMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.year + item.title}
                className={`editorial-journey__item ${isEven ? 'is-left' : 'is-right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                {/* Milestone Node on Track */}
                <div
                  className="editorial-journey__node"
                  style={{ borderColor: item.accent }}
                  aria-hidden="true"
                >
                  <div
                    className="editorial-journey__node-dot"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>

                {/* Milestone Card */}
                <div className="editorial-journey__card">
                  <div className="editorial-journey__card-top">
                    <span
                      className="editorial-journey__year font-serif"
                      style={{ color: item.accent }}
                    >
                      {item.year}
                    </span>
                    <span className="editorial-journey__tag font-heading">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="editorial-journey__title font-serif">
                    {item.title}
                  </h3>
                  <h4 className="editorial-journey__role font-heading">
                    {item.role}
                  </h4>
                  <p className="editorial-journey__desc font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
