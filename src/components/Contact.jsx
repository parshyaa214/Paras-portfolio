import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

const EMAIL = 'chavanparas004@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const el = document.createElement('input');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="contact" className="section-wrapper editorial-contact">
      <div className="container">
        <div className="editorial-contact__inner">
          <p className="section-label">Let's Connect</p>

          {/* Main Editorial Heading */}
          <h2 className="editorial-contact__heading font-serif">
            Have an idea? <br />
            <em>Let's make it happen.</em>
          </h2>

          <p className="editorial-contact__desc font-body">
            I'm always interested in learning, building interesting projects, and connecting with
            people who enjoy technology. Whether you have an internship opportunity, an open-source collaboration,
            or just want to say hi, my inbox is always open.
          </p>

          {/* Big Action Box */}
          <div className="editorial-contact__box">
            <div className="editorial-contact__email-row">
              <span className="editorial-contact__email-label font-heading">Direct Email</span>
              <a href={`mailto:${EMAIL}`} className="editorial-contact__email-link font-serif">
                {EMAIL}
              </a>
            </div>

            <div className="editorial-contact__buttons">
              <button
                onClick={copyEmail}
                className="btn btn-secondary editorial-contact__btn"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} color="#4E735B" /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${EMAIL}`}
                className="btn btn-primary editorial-contact__btn"
              >
                <Mail size={16} />
                <span>Write an Email</span>
              </a>
            </div>
          </div>

          {/* Connect Links Grid */}
          <div className="editorial-contact__channels">
            <a
              href="https://github.com/parshyaa214"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-contact__channel"
            >
              <div className="editorial-contact__channel-icon">
                <GithubIcon size={18} />
              </div>
              <div>
                <p className="editorial-contact__channel-title font-heading">GitHub</p>
                <p className="editorial-contact__channel-sub font-body">github.com/parshyaa214</p>
              </div>
              <ArrowUpRight size={16} className="editorial-contact__channel-arrow" />
            </a>

            <a
              href="https://linkedin.com/in/paraschavan214"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-contact__channel"
            >
              <div className="editorial-contact__channel-icon editorial-contact__channel-icon--blue">
                <LinkedinIcon size={18} />
              </div>
              <div>
                <p className="editorial-contact__channel-title font-heading">LinkedIn</p>
                <p className="editorial-contact__channel-sub font-body">linkedin.com/in/paraschavan214</p>
              </div>
              <ArrowUpRight size={16} className="editorial-contact__channel-arrow" />
            </a>

            <div className="editorial-contact__channel editorial-contact__channel--static">
              <div className="editorial-contact__channel-icon editorial-contact__channel-icon--peach">
                <MapPin size={18} />
              </div>
              <div>
                <p className="editorial-contact__channel-title font-heading">Location</p>
                <p className="editorial-contact__channel-sub font-body">Kolhapur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
