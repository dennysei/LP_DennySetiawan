import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" aria-label="Denny Setiawan — Home">
          <span className="navbar__name">Denny Setiawan</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`navbar__cta ${location.pathname === '/contact' ? 'navbar__cta--active' : ''}`}
          >
            Let's Talk
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile" aria-label="Mobile navigation">
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__mobile-link ${location.pathname === l.to ? 'navbar__mobile-link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="navbar__mobile-cta">
            Let's Talk →
          </Link>
        </div>
      )}
    </header>
  );
}
