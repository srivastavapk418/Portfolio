import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personal } from '../../data/portfolioData';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#hero" onClick={() => handleNav('#hero')}>
          <span className="logo-initials">{personal.initials}</span>
          <span className="logo-dot">.</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                className={`navbar__link ${active === link.href ? 'active' : ''}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className={`theme-toggle__icon ${isDark ? 'hidden' : ''}`}>
              <Moon size={16} />
            </span>
            <span className={`theme-toggle__icon ${!isDark ? 'hidden' : ''}`}>
              <Sun size={16} />
            </span>
          </button>
          <a href={`mailto:${personal.email}`} className="btn btn-primary btn-sm navbar__cta">
            Hire me
          </a>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button key={link.href} className="navbar__mobile-link" onClick={() => handleNav(link.href)}>
            {link.label}
          </button>
        ))}
        <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{marginTop:'0.5rem'}}>
          Hire me
        </a>
      </div>
    </nav>
  );
}
