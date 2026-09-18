import './Experience.css';

const TIMELINE = [
  {
    title: '[Job Title]',
    dates: '[Month Year] — Present',
    company: '[Company / Client Name]',
    items: [
      '[Responsibility — e.g. Managed social media accounts across Instagram, Facebook and TikTok]',
      '[Responsibility — e.g. Handled inbox, calendar and administrative tasks for founder]',
      '[Achievement — e.g. Grew Instagram following by 40% in six months]',
    ],
  },
  {
    title: '[Job Title]',
    dates: '[Month Year] — [Month Year]',
    company: '[Company / Client Name]',
    items: [
      '[Responsibility — e.g. Created and scheduled monthly content calendars]',
      '[Responsibility — e.g. Provided administrative and customer support]',
      '[Achievement — e.g. Reduced email response time by 60%]',
    ],
  },
  {
    title: '[Job Title]',
    dates: '[Month Year] — [Month Year]',
    company: '[Company / Client Name]',
    items: [
      '[Responsibility — e.g. Designed social media graphics and promotional content]',
      '[Responsibility — e.g. Supported research and data organisation projects]',
      '[Achievement — e.g. Delivered every project ahead of deadline]',
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
          <p>An editable timeline — replace each entry below with real roles, dates and achievements.</p>
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
