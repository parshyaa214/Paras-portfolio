import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container editorial-footer__inner">
        <div className="editorial-footer__left">
          <p className="editorial-footer__brand font-heading">PARAS CHAVAN</p>
          <p className="editorial-footer__sub font-body">
            Computer Science Engineering Student &amp; Creative Developer
          </p>
        </div>

        <div className="editorial-footer__center font-body">
          <p className="editorial-footer__quote font-serif">
            “Designed with intentionality. Built with curiosity.”
          </p>
          <p className="editorial-footer__copy">
            © {year} Paras Ram Chavan. All rights reserved.
          </p>
        </div>

        <div className="editorial-footer__right">
          <a
            href="https://github.com/parshyaa214"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-footer__social"
            aria-label="GitHub profile"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/paraschavan214"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-footer__social"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={17} />
          </a>
          <button
            onClick={scrollToTop}
            className="editorial-footer__back-top font-heading"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
