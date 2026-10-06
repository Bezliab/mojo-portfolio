import './Resume.css';

export default function Resume() {
  return (
    <section className="section section-alt" id="resume">
      <div className="wrap">
        <div className="resume-card">
          <div className="resume-text">
            <h2>Want the full picture?</h2>
            <p>
              Download my CV for a complete overview of my experience, skills and the results
              I've delivered for past clients and employers.
            </p>
          </div>
          <div className="resume-actions">
            <a
              href="/Esther-Mojisola-CV.pdf"
              className="btn btn-light"
              download="Esther-Mojisola-CV.pdf"
            >
              Download My CV
            </a>
            <small>PDF · Updated October 2026</small>
          </div>
        </div>
      </div>
    </section>
  );
}
