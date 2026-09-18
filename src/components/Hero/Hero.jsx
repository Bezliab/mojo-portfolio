import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  // Single orchestrated hero entrance, mirroring a one-time page-load reveal.
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const revealClass = loaded ? 'reveal is-visible' : 'reveal';

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className={`hero-label ${revealClass}`}>
            Virtual Assistant, Content Creator &amp; Social Media Manager
          </span>
          <h1 className={revealClass}>Helping Brands Stay Organized, Visible &amp; Connected.</h1>
          <p className={`hero-sub ${revealClass}`}>
            I partner with entrepreneurs and growing businesses to handle the details that keep
            things running, build a social presence people actually stop to look at, and create
            content that turns followers into customers.
          </p>
          <p className={`hero-services-line ${revealClass}`}>
            Virtual Assistance. Content Creation. Social Media Management.
          </p>
          <div className={`hero-actions ${revealClass}`}>
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Work Together
            </a>
          </div>
          <div className={`hero-meta ${revealClass}`}>
            <div>
              <strong>3+</strong>
              <span>Years supporting brands online</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>Projects &amp; campaigns delivered</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Client satisfaction rate</span>
            </div>
          </div>
        </div>
        <div className={`hero-photo-wrap ${revealClass}`}>
          {/* Replace this block with: <img src="your-photo.jpg" alt="Mojisola Esther" /> inside a div.hero-photo */}
          <div className="hero-photo">
            <div className="hero-photo-frame"></div>
            <span className="hero-photo-monogram">ME</span>
            <div className="hero-photo-tag">
              <span className="dot"></span>
              Currently booking new clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
