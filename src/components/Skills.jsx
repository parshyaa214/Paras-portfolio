import { motion } from 'motion/react';
import { Code, Globe, Server, Database, Cpu, Wrench } from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code,
    color: '#9CAF9A', // Sage
    bg: '#F2F6F1',
    skills: [
      { name: 'C', status: 'Experienced' },
      { name: 'Python', status: 'Experienced' },
      { name: 'JavaScript', status: 'Experienced' },
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    color: '#A9C5D8', // Soft Blue
    bg: '#F0F5F9',
    skills: [
      { name: 'HTML5', status: 'Experienced' },
      { name: 'CSS3', status: 'Experienced' },
      { name: 'React.js', status: 'Actively Learning' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#D4C8E8', // Lavender
    bg: '#F6F3FB',
    skills: [
      { name: 'Node.js', status: 'Actively Learning' },
      { name: 'Express.js', status: 'Actively Learning' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#EBC6AE', // Peach
    bg: '#FBF5F0',
    skills: [
      { name: 'MySQL', status: 'Experienced' },
      { name: 'MongoDB', status: 'Actively Learning' },
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    icon: Cpu,
    color: '#9CAF9A',
    bg: '#F2F6F1',
    skills: [
      { name: 'Arrays & Pointers', status: 'Experienced' },
      { name: 'Linked Lists', status: 'Experienced' },
      { name: 'Stack & Queue', status: 'Experienced' },
      { name: 'Graphs (DFS / BFS)', status: 'Experienced' },
      { name: 'Searching & Sorting', status: 'Experienced' },
    ],
  },
  {
    title: 'Hardware & IoT',
    icon: Cpu,
    color: '#A9C5D8',
    bg: '#F0F5F9',
    skills: [
      { name: 'Arduino Uno', status: 'Experienced' },
      { name: 'RFID RC522 Module', status: 'Experienced' },
      { name: 'Temperature Sensors', status: 'Experienced' },
      { name: 'Humidity Sensors', status: 'Experienced' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: '#D4C8E8',
    bg: '#F6F3FB',
    skills: [
      { name: 'Git & GitHub', status: 'Experienced' },
      { name: 'VS Code', status: 'Experienced' },
      { name: 'Antigravity IDE', status: 'Experienced' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper editorial-skills">
      <div className="container">
        {/* Header */}
        <div className="editorial-skills__header">
          <p className="section-label">Tools I work with.</p>
          <div className="editorial-skills__header-row">
            <h2 className="section-heading">My Technical Stack &amp; Focus</h2>
            <div className="editorial-skills__legend font-body">
              <span className="editorial-skills__legend-item">
                <span className="editorial-skills__dot editorial-skills__dot--solid" />
                Practical Experience
              </span>
              <span className="editorial-skills__legend-item">
                <span className="editorial-skills__dot editorial-skills__dot--learning" />
                Actively Learning
              </span>
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="editorial-skills__grid">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                className="editorial-skills__card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="editorial-skills__card-top">
                  <div
                    className="editorial-skills__icon-box"
                    style={{ backgroundColor: group.bg, color: group.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="editorial-skills__card-title font-heading">
                    {group.title}
                  </h3>
                </div>

                <div className="editorial-skills__list">
                  {group.skills.map((item) => {
                    const isLearning = item.status === 'Actively Learning';
                    return (
                      <div
                        key={item.name}
                        className={`editorial-skills__item ${isLearning ? 'editorial-skills__item--learning' : ''}`}
                      >
                        <span className="editorial-skills__item-name font-body">
                          {item.name}
                        </span>
                        <span className="editorial-skills__item-status font-heading">
                          {item.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
