import { Link } from 'react-router-dom';
import './Footer.css';

const nav = [
  { label: 'About',      to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Work',       to: '/work' },
  { label: 'Services',   to: '/services' },
  { label: 'Contact',    to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">Denny Setiawan</span>
            <p className="footer__tagline">
              Business, data, and process improvement —<br />structured into practical insight.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {nav.map(l => (
              <Link key={l.to} to={l.to} className="footer__link">{l.label}</Link>
            ))}
          </nav>

          <div className="footer__contact">
            <p className="footer__contact-label">Get in touch</p>
            <a href="mailto:dennysetiawan056@gmail.com" className="footer__link">
              dennysetiawan056@gmail.com
            </a>
            <a href="tel:+6285819155363" className="footer__link">
              +62 858 1915 5363
            </a>
            <a href="https://wa.me/6285819155363" className="footer__link" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/dennysetiawan056/" className="footer__link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {new Date().getFullYear()} Denny Setiawan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
