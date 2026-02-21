import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { experience } from '../../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <div className="exp__header reveal">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">
            Where I've been,<br />
            <em>what I've built</em>
          </h2>
          <p className="section-subtitle">
            From engineering naval vessels to architecting web applications — every role shaped how I think.
          </p>
        </div>

        <div className="exp__timeline" ref={ref}>
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`exp__item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="exp__item-connector">
                <div className="exp__dot" style={{ background: exp.color }} />
                {i < experience.length - 1 && <div className="exp__line" />}
              </div>

              <div className="exp__content card">
                <div className="exp__content-header">
                  <div>
                    <div className="exp__period">{exp.period}</div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <div className="exp__company">
                      <span style={{ color: exp.color, fontWeight: 600 }}>{exp.company}</span>
                      <span className="exp__type">{exp.type}</span>
                      <span className="exp__location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp__badge" style={{ '--color': exp.color }}>
                    {exp.type}
                  </div>
                </div>

                <p className="exp__description">{exp.description}</p>

                <ul className="exp__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="exp__highlight-item">
                      <span className="highlight-check">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
