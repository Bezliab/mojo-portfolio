import './Experience.css';

const TIMELINE = [
  {
    title: 'Secretary / Executive Assistant (Virtual Assistant & Social Media Manager)',
    dates: '2026',
    company: 'Deborah Bams Creation',
    items: [
      'Created and executed strategic content plans that strengthened brand visibility and supported business sales.',
      'Managed multiple social media handles, growing audience engagement and reach through consistent, targeted content.',
      'Provided direct administrative support to the CEO, managing executive scheduling and day-to-day operations.',
      'Supervised students and instructors to maintain smooth daily operations and consistent service delivery.',
    ],
  },
  {
    title: 'Assistant',
    dates: '2025',
    company: 'Aanuoluwapo Stores',
    items: [
      'Supported the sales of goods and services, assisting customers through the full purchase process.',
      'Maintained accurate documentation and records of daily sales transactions.',
      'Worked closely with clients from initial concept through to final delivery, ensuring satisfaction at each stage.',
    ],
  },
  {
    title: 'Manager',
    dates: '2020 – 2021',
    company: 'Aanuoluwapo Block Industry',
    items: [
      'Coordinated daily workflow and monitored staff performance to maintain operational efficiency.',
      'Implemented process improvements that supported optimum productivity and company growth.',
      'Managed payroll operations and ensured accurate, prompt payment of all workers.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Experience</span>
          <h2>Where I've worked.</h2>
          <p>A look at the roles that have shaped how I support brands and teams.</p>
        </div>
        <div className="timeline">
          {TIMELINE.map((role, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <h3>{role.title}</h3>
                <span className="dates">{role.dates}</span>
              </div>
              <span className="company">{role.company}</span>
              <ul>
                {role.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
