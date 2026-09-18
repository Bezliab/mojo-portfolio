import { useEffect, useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="logo">
          Mojisola <span>Esther</span>
        </a>

        <nav className={`main-nav${navOpen ? ' open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={closeNav}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-outline hide-mobile">
            Let's Work Together
          </a>
          <button
            type="button"
            className={`nav-toggle${navOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
