import './Services.css';

const SERVICES = [
  {
    title: 'Virtual Assistance',
    summary: "Reliable day-to-day support so nothing on your to-do list gets forgotten.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    items: [
      'Email & inbox management',
      'Calendar & scheduling management',
      'Administrative support',
      'Research & data organisation',
      'Customer support & enquiries',
      'Travel coordination & bookings',
    ],
  },
  {
    title: 'Social Media Management',
    summary: 'End-to-end management that keeps your platforms active, on-brand and engaging.',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
    items: [
      'Social media strategy',
      'Content planning & scheduling',
      'Caption writing',
      'Community management & engagement',
      'Account management',
      'Performance analytics & reporting',
    ],
  },
  {
    title: 'Content Creation',
    summary: 'Scroll-stopping visuals and stories that sound like your brand, not a template.',
    icon: (
      <path
        d="M4 19l4.5-1.2L19 8.3a1.7 1.7 0 0 0 0-2.4l-.9-.9a1.7 1.7 0 0 0-2.4 0L5.2 14.5 4 19z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
    items: [
      'Social media posts & Reels',
      'Content calendars',
      'Canva design & templates',
      'Promotional content',
      'Brand storytelling',
      'Campaign concepts',
    ],
  },
];

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">What I Do</span>
          <h2>Three ways I help your business run better.</h2>
          <p>
            From the inbox to the content calendar, I cover the day-to-day work that keeps a
            brand organised, visible and connected — so you can focus on the bigger picture.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  {service.icon}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="service-list">
                {service.items.map((item) => (
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
