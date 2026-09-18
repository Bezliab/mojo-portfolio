import './Footer.css';

const NAVIGATE_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
];

const MORE_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              Mojisola <span>Esther</span>
            </a>
            <p>
              Virtual Assistant, Content Creator &amp; Social Media Manager helping brands stay
              organized, visible and connected.
            </p>
            <div className="footer-social" style={{ marginTop: 22 }}>
              <a href="https://instagram.com/mojisolaesther" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/mojisolaesther" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M8 10.5v6M8 7.8v.01M12.2 16.5v-3.6c0-1.2.8-2 2-2s1.8.8 1.8 2v3.6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a href="mailto:hello@mojisolaesther.com" aria-label="Email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                {NAVIGATE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>More</h4>
              <ul>
                {MORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} Mojisola Esther. All rights reserved.</p>
          <p>Designed as a portfolio template — replace all bracketed placeholders with real information.</p>
        </div>
      </div>
    </footer>
  );
}
