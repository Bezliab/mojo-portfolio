import './Skills.css';

const SKILL_GROUPS = [
  {
    label: 'Platforms & Software',
    items: ['Canva', 'Google Workspace', 'Microsoft Office', 'Notion', 'Slack', 'Trello', 'Asana'],
  },
  {
    label: 'Social Platforms',
    items: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Pinterest', 'X (Twitter)'],
  },
  {
    label: 'Core Skills',
    items: [
      'Content Planning',
      'Copywriting',
      'Email Management',
      'Calendar Management',
      'Research',
      'Communication',
      'Project Coordination',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap skills-layout">
        <div className="skills-intro">
          <span className="section-tag">Tools &amp; Skills</span>
          <h2>Fluent in the tools that keep a business moving.</h2>
          <p>
            I work across the platforms most small businesses and teams already use, so
            onboarding me is quick — no long learning curve, no starting from scratch.
          </p>
        </div>
        <div className="skills-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <span className="skills-group-label">{group.label}</span>
              <div className="skills-grid">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    <span className="chip-dot"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
