import { motion } from 'motion/react';
import './Preloader.css';

export default function Preloader() {
  return (
    <motion.div
      className="editorial-preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="editorial-preloader__content">
        {/* Monogram Emblem */}
        <motion.div
          className="editorial-preloader__monogram"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editorial-preloader__logo-box">
            <span className="editorial-preloader__initials font-heading">PRC</span>
          </div>
        </motion.div>

        {/* Full Name & Editorial Tagline */}
        <motion.h1
          className="editorial-preloader__name font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Paras Ram Chavan
        </motion.h1>

        <motion.p
          className="editorial-preloader__subtitle font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Portfolio &amp; Creative Engineering
        </motion.p>

        {/* Subtle Progress Bar */}
        <div className="editorial-preloader__bar">
          <motion.div
            className="editorial-preloader__progress"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
