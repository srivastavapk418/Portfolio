import { useState } from 'react';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolioData';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const { ref, visibleItems } = useStaggerAnimation(projects.length, 0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="projects__header reveal">
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            Real projects, deployed and functional. Each one taught me something new about building for production.
          </p>
        </div>

        <div className="projects__grid" ref={ref}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${visibleItems.includes(i) ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top bar - animated color accent */}
              <div
                className="project-card__bar"
                style={{ background: project.color }}
              />

              {/* Number */}
              <div className="project-card__number" style={{ color: project.color }}>
                {String(project.id).padStart(2, '0')}
              </div>

              {/* Header */}
              <div className="project-card__header">
                <div>
                  <div className="project-card__subtitle">{project.subtitle}</div>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>
                <div className="project-card__actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-btn"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-btn"
                      title="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Highlights */}
              <div className="project-card__highlights">
                {project.highlights.map(h => (
                  <span key={h} className="project-highlight" style={{ '--color': project.color }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="project-card__stack">
                {project.tech.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              {/* Hover CTA */}
              <a
                href={project.github || '#'}
                target="_blank"
                rel="noreferrer"
                className={`project-card__cta ${hovered === i ? 'visible' : ''}`}
                style={{ color: project.color }}
              >
                View on GitHub <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="projects__footer reveal">
          <p className="projects__footer-text">
            More projects on GitHub →
          </p>
          <a
            href="https://github.com/srivastavapk418"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Github size={16} />
            View all repositories
          </a>
        </div>
      </div>
    </section>
  );
}
