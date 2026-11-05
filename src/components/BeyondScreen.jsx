import { motion } from 'motion/react';
import { Compass, BookOpen, Lightbulb, MapPin, Laptop, Heart } from 'lucide-react';
import './BeyondScreen.css';

const pursuits = [
  {
    icon: Lightbulb,
    title: 'Exploring Technology',
    desc: 'Constantly tracking breakthroughs in AI architectures, open-source software patterns, and modern web frameworks.',
    color: '#9CAF9A',
    bg: '#F2F6F1',
  },
  {
    icon: Laptop,
    title: 'Building Practical Solutions',
    desc: 'Translating concepts into tangible tools that help real people solve daily tasks, from transit platforms to study vaults.',
    color: '#A9C5D8',
    bg: '#F0F5F9',
  },
  {
    icon: Compass,
    title: 'Exploring Places & Cultures',
    desc: 'Travelling across Maharashtra, learning local narratives, observing urban systems, and drawing fresh creative perspective.',
    color: '#EBC6AE',
    bg: '#FBF5F0',
  },
  {
    icon: BookOpen,
    title: 'Continuous Self-Education',
    desc: 'Reading engineering case-studies, diving into hardware schematics, and testing algorithms through deliberate practice.',
    color: '#D4C8E8',
    bg: '#F6F3FB',
  },
];

export default function BeyondScreen() {
  return (
    <section className="section-wrapper editorial-beyond">
      <div className="container">
        {/* Header */}
        <div className="editorial-beyond__header">
          <p className="section-label">Human Dimension</p>
          <div className="editorial-beyond__header-row">
            <h2 className="section-heading">Beyond the screen.</h2>
            <p className="editorial-beyond__intro font-body">
              Engineering is my craft, but curiosity shapes who I am. Here is a glimpse into the
              passions, mindset, and philosophies that inspire my everyday work.
            </p>
          </div>
        </div>

        {/* Narrative & Pursuits Grid */}
        <div className="editorial-beyond__grid">
          {pursuits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="editorial-beyond__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div
                  className="editorial-beyond__icon"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="editorial-beyond__card-title font-serif">
                  {item.title}
                </h3>

                <p className="editorial-beyond__card-desc font-body">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Warm Personal Statement Banner */}
        <div className="editorial-beyond__banner">
          <Heart size={20} className="editorial-beyond__heart" />
          <p className="font-serif">
            “Technology is at its most powerful when it remains humble, accessible, and centered around real human needs.”
          </p>
        </div>
      </div>
    </section>
  );
}
