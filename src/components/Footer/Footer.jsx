import { personal } from '../../data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{personal.initials}<span>.</span></span>
          <p className="footer__tagline">Building the web, one commit at a time.</p>
        </div>
        <div className="footer__links">
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer__icon-link">
            <Github size={17} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer__icon-link">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${personal.email}`} className="footer__icon-link">
            <Mail size={17} />
          </a>
        </div>
        <div className="footer__copy">
          <span>© {year} Prateek Kumar Srivastava</span>
          <span className="footer__sep">·</span>
          <span className="footer__made">Made with <Heart size={11} className="heart" /> using MERN</span>
        </div>
      </div>
    </footer>
  );
}
