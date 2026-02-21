import { useGitHub } from '../../hooks/useGitHub';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personal } from '../../data/portfolioData';
import { Star, GitFork, ExternalLink, Github, AlertCircle } from 'lucide-react';
import './GitHub.css';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Python: '#3572A5',
  default: '#8b5cf6',
};

export default function GitHub() {
  const { user, repos, loading, error } = useGitHub();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="github-section" id="github">
      <div className="section-container">
        <div className="github__header reveal">
          <div className="section-tag">GitHub</div>
          <h2 className="section-title">Code, live.</h2>
          <p className="section-subtitle">
            Real-time data from my GitHub profile. Always building, always shipping.
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="github__profile-link"
          >
            <Github size={16} />
            {personal.githubUsername}
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Stats */}
        <div className="github__stats" ref={ref}>
          {loading ? (
            <div className="github__loading">
              <div className="github__spinner" />
              <span>Fetching GitHub data...</span>
            </div>
          ) : error ? (
            <div className="github__error">
              <AlertCircle size={16} />
              {error}
            </div>
          ) : user && (
            <>
              <div className={`gh-stat-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
                <div className="gh-stat-num">{user.public_repos}</div>
                <div className="gh-stat-label">Repositories</div>
              </div>
              <div className={`gh-stat-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
                <div className="gh-stat-num">{repos.totalStars || 0}</div>
                <div className="gh-stat-label">Total Stars</div>
              </div>
              <div className={`gh-stat-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '160ms' }}>
                <div className="gh-stat-num">{user.followers}</div>
                <div className="gh-stat-label">Followers</div>
              </div>
              <div className={`gh-stat-card ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '240ms' }}>
                <div className="gh-stat-num">{user.following}</div>
                <div className="gh-stat-label">Following</div>
              </div>
            </>
          )}
        </div>

        {/* Repos grid */}
        {!loading && !error && repos.list && (
          <div className="github__repos">
            {repos.list.map((repo, i) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className={`gh-repo-card reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="gh-repo-card__header">
                  <div className="gh-repo-card__name">
                    <Github size={14} />
                    {repo.name}
                  </div>
                  <ExternalLink size={12} className="gh-repo-card__ext" />
                </div>
                <p className="gh-repo-card__desc">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="gh-repo-card__meta">
                  {repo.language && (
                    <span className="gh-meta-item">
                      <span
                        className="lang-dot"
                        style={{ background: LANG_COLORS[repo.language] || LANG_COLORS.default }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="gh-meta-item">
                    <Star size={11} />
                    {repo.stargazers_count}
                  </span>
                  <span className="gh-meta-item">
                    <GitFork size={11} />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
