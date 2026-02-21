import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const { ref, visibleItems } = useStaggerAnimation(skills.length, 0.1);

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <div className="skills__header reveal" style={{ '--delay': '0ms' }}>
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">What I build with</h2>
          <p className="section-subtitle">
            A full-stack toolkit covering frontend, backend, databases, and cloud — all the pieces to ship complete products.
          </p>
        </div>

        <div className="skills__grid" ref={ref}>
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className={`skills__card card ${visibleItems.includes(i) ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="skills__card-header">
                <span className="skills__icon">{skill.icon}</span>
                <span className="skills__category">{skill.category}</span>
              </div>
              <div className="skills__tags">
                {skill.items.map(item => (
                  <span key={item} className="skills__tag">
                    {item}
                  </span>
                ))}
              </div>
              <div className="skills__card-accent" />
            </div>
          ))}
        </div>

        {/* Featured skill highlight */}
        <div className="skills__highlight reveal">
          <div className="skills__highlight-inner">
            <div className="skills__highlight-label">Primary expertise</div>
            <div className="skills__mern">
              {['M', 'E', 'R', 'N'].map((letter, i) => (
                <div key={letter} className="mern-letter" style={{ '--delay': `${i * 0.1}s` }}>
                  <span className="mern-char">{letter}</span>
                  <span className="mern-word">
                    {['MongoDB', 'Express', 'React', 'Node.js'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
