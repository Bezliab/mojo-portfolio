import './WhyWorkWithMe.css';

const REASONS = [
  {
    title: 'Reliable Communication',
    description: "Regular updates, so you're never left wondering",
    icon: <path d="M4 4l16 6-7 2-2 7-7-15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    title: 'Attention to Detail',
    description: "Work that's proofed, checked and polished",
    icon: (
      <path
        d="M9 11l2 2 4-4M21 12a9 9 0 1 1-9-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Meeting Deadlines',
    description: 'Delivered on time, every time — no last-minute chasing',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Creative Thinking',
    description: 'Fresh ideas, not the same template reused',
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
    title: 'Consistency',
    description: 'A steady presence your audience learns to expect',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: 'Proactive Support',
    description: 'Flagging issues and ideas before you have to ask',
    icon: (
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Professionalism',
    description: 'Discreet, respectful and easy to bring into a team',
    icon: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: 'Always Learning',
    description: 'Quick to pick up new tools, platforms and workflows',
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 4v4h-4M6 20v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section" id="why">
      <div className="wrap why-layout">
        <div className="why-pull">
          <p>
            You shouldn't have to double-check my work or chase me for updates. That's the
            standard I hold myself to on every project.
          </p>
          <span>— Mojisola Esther</span>
        </div>
        <div className="why-content">
          <span className="section-tag">Why Work With Me</span>
          <h2 className="why-heading">A partner you can actually hand things off to.</h2>
          <div className="why-grid">
            {REASONS.map((reason) => (
              <div className="why-item" key={reason.title}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {reason.icon}
                </svg>
                <div>
                  <strong>{reason.title}</strong>
                  <span>{reason.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
