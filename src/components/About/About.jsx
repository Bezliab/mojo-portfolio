import './About.css';

const QUALITIES = [
  {
    title: 'Organisation',
    description: 'Systems that keep every task and file findable',
    icon: (
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  {
    title: 'Communication',
    description: 'Clear updates, no chasing for answers',
    icon: (
      <path
        d="M21 11.5a8.5 8.5 0 1 1-4.1-7.3L21 3l-1 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Creativity',
    description: 'Content ideas that feel fresh, not templated',
    icon: (
      <path
        d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Time Management',
    description: 'Deadlines treated as promises, not suggestions',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Attention to Detail',
    description: 'Typo-free captions and error-free calendars',
    icon: (
      <path
        d="M9 11l2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Problem-Solving',
    description: 'Finding the workaround before it becomes a crisis',
    icon: (
      <>
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Adaptability',
    description: 'Comfortable switching tools, tone and priorities',
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 4v4h-4M6 20v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Professionalism',
    description: 'Reliable, discreet, and easy to work with',
    icon: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="about-visual">
          <div className="about-card">
            <p>
              I believe an organized business is a business that can breathe. My job is to make
              sure nothing important ever falls through the cracks.
            </p>
            <cite>— Mojisola Esther</cite>
          </div>
        </div>
        <div className="about-copy">
          <span className="section-tag">About Me</span>
          <p>
            Hi, I'm Mojisola — a Virtual Assistant, Content Creator and Social Media Manager who
            genuinely loves the behind-the-scenes work that makes a brand run smoothly.
          </p>
          <p>
            I got my start helping a small business owner untangle an overflowing inbox and an
            inconsistent Instagram feed, and I realized quickly that this is where I do my best
            work: bringing order to the chaos of running a business, and bringing a brand's
            personality to life online. Since then I've supported founders, coaches and small
            teams who needed someone they could hand things to and trust it would be done right,
            on time, without having to check in twice.
          </p>
          <p>
            I'm the person who colour-codes a calendar for fun, who notices when a caption is
            missing a call-to-action, and who would rather ask one clarifying question upfront
            than guess and get it wrong. Clients tell me I'm calm under deadline pressure and easy
            to loop into a fast-moving week — I take that as the highest compliment.
          </p>
          <div className="quality-grid">
            {QUALITIES.map((quality) => (
              <div className="quality-item" key={quality.title}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  {quality.icon}
                </svg>
                <div>
                  <strong>{quality.title}</strong>
                  <span>{quality.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
