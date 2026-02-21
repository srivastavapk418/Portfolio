import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personal } from '../../data/portfolioData';
import { MapPin, GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import './About.css';

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2);

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about__grid">
          {/* Text side */}
          <div ref={textRef} className={`about__text ${textVisible ? 'visible' : ''}`}>
            <div className="section-tag">About me</div>
            <h2 className="section-title">
              The engineer who
              <br />
              <em>chose to code</em>
            </h2>
            <p className="about__para">{personal.about}</p>
            <p className="about__para about__para--2">{personal.about2}</p>

            <div className="about__cta-row">
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                GitHub Profile
                <ExternalLink size={14} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Info card side */}
          <div ref={cardRef} className={`about__card-col ${cardVisible ? 'visible' : ''}`}>
            {/* Abstract animated visual */}
            <div className="about__visual">
              <div className="about__visual-ring ring-1" />
              <div className="about__visual-ring ring-2" />
              <div className="about__visual-ring ring-3" />
              <div className="about__visual-core">
                <span className="about__visual-initials">{personal.initials}</span>
              </div>
              {/* Orbiting badges */}
              <div className="orbit-badge" style={{ '--angle': '0deg' }}>React</div>
              <div className="orbit-badge" style={{ '--angle': '90deg' }}>Node</div>
              <div className="orbit-badge" style={{ '--angle': '180deg' }}>MongoDB</div>
              <div className="orbit-badge" style={{ '--angle': '270deg' }}>Cloud</div>
            </div>

            {/* Info rows */}
            <div className="about__info-grid">
              <div className="about__info-item">
                <MapPin size={15} className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{personal.location}</span>
                </div>
              </div>
              <div className="about__info-item">
                <GraduationCap size={15} className="info-icon" />
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">{personal.degree}</span>
                </div>
              </div>
              <div className="about__info-item">
                <Calendar size={15} className="info-icon" />
                <div>
                  <span className="info-label">Graduating</span>
                  <span className="info-value">{personal.graduation}</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="info-icon" style={{ fontSize: '0.9rem' }}>🏅</span>
                <div>
                  <span className="info-label">CGPA</span>
                  <span className="info-value">{personal.cgpa}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
