import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { achievements } from '../../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  const { ref, visibleItems } = useStaggerAnimation(achievements.length, 0.1);

  return (
    <section className="achievements" id="achievements">
      <div className="section-container">
        <div className="achievements__header reveal">
          <div className="section-tag">Achievements</div>
          <h2 className="section-title">
            Earned, not given.
          </h2>
          <p className="section-subtitle">
            Certifications and rankings that validate the work I put in.
          </p>
        </div>

        <div className="achievements__grid" ref={ref}>
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achievement-card card ${visibleItems.includes(i) ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms`, '--color': a.color }}
            >
              <div className="achievement-card__glow" />
              <div className="achievement-card__icon">{a.icon}</div>
              <div className="achievement-card__label">{a.label}</div>
              <h3 className="achievement-card__title">{a.title}</h3>
              <p className="achievement-card__detail">{a.detail}</p>
              <div className="achievement-card__accent" style={{ background: a.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
