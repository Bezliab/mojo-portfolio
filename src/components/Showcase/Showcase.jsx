import "./Showcase.css";

// Weekly template (Mon–Sun) used to build the sample month calendar.
// Sunday is a rest day with no scheduled post.
const WEEK_PATTERN = [
  "gold",
  "berry-light",
  "gold",
  "ink-soft",
  "berry",
  "berry-light",
  null,
];
const DAYS_IN_MOCK_MONTH = 28;
const CALENDAR_DAYS = Array.from({ length: DAYS_IN_MOCK_MONTH }, (_, i) => {
  const day = i + 1;
  return { day, color: WEEK_PATTERN[i % 7] };
});

const LEGEND = [
  { color: "gold", label: "Educational Tips" },
  { color: "berry-light", label: "Behind-the-Scenes" },
  { color: "berry", label: "Promotional" },
  { color: "ink-soft", label: "Community & Engagement" },
];

const PILLARS = [
  {
    color: "gold",
    title: "Educational Tips",
    description:
      "Quick, useful tips that position the brand as the go-to expert in its space.",
  },
  {
    color: "berry-light",
    title: "Behind-the-Scenes",
    description:
      "Process, workspace and personality content that builds familiarity and trust.",
  },
  {
    color: "berry",
    title: "Promotional",
    description:
      "Product, service and offer content, always tied back to a clear call-to-action.",
  },
  {
    color: "ink-soft",
    title: "Community & Engagement",
    description:
      "Questions, polls and client wins that invite followers to comment and share.",
  },
];

const CAPTIONS = [
  {
    platform: "Instagram — Educational Post",
    text: 'Three things to check before you hit "post" this week: Your caption should have a clear message, your visuals should match your brand, and your call-to-action should tell your audience what to do next. Consistent, intentional content makes your brand easier to recognize and trust.',
    hashtags:
      "#ContentStrategy #SocialMediaTips #SmallBusinessTips #contentplanning",
  },
  {
    platform: "Instagram — Promotional Post",
    text: "Ready to give your brand a stronger online presence? — From content planning and creative direction to social media management, I help brands create content that looks professional, connects with their audience, and supports their business goals.",
    textCTA: "Let's work together.",
    hashtags: "#SocialMediaManagement #DigitalMarketing #BrandGrowth",
  },
];

const ENGAGEMENT_APPROACH = [
  "Reply to every comment and DM within 24 hours",
  "Spend 15 minutes daily engaging with target accounts",
  // 'Use polls, questions and "this or that" prompts weekly',
  "Re-share and thank followers who tag the brand",
  "Track which post formats spark the most conversation",
];

const HASHTAG_GROUPS = [
  { label: "Branded:", value: "#MojisolaEsther, #MojoVisuals" },
  {
    label: "Niche:",
    value: "#SocialMediaManager, #ContentStrategy, #DigitalMarketing",
  },
  {
    label: "Broad reach:",
    value: "#SocialMedia, #ContentCreation, #SmallBusiness",
  },
  {
    label: "Local/community:",
    value: "#NigerianBusiness, #Business, #Entrepreneurs",
  },
];

const STATS = [
  { value: "700+", label: "Accounts reached" },
  { value: "52%", label: "Average engagement rate" },
  { value: "+600", label: "New followers this month" },
  { value: "1.2K", label: "Views on top-performing post" },
];

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Showcase() {
  return (
    <section className="section" id="showcase">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">
            Social Media Management, In Practice
          </span>
          <h2>A behind-the-scenes look at how I manage a brand's presence.</h2>
          <p>
            This is a sample of the systems and thinking I bring to every
            account — a real content calendar, defined content pillars, caption
            examples and a reporting rhythm, all using placeholder data for a
            fictional client brand.
          </p>
        </div>

        <div className="showcase-block">
          <div className="showcase-block-head">
            <h3>Monthly Content Calendar</h3>
            <p>Sample month — mapped by content pillar</p>
          </div>
          <div className="calendar-mock">
            <div className="calendar-mock-head">
              <strong>March — Sample Client Calendar</strong>
              <span>4 posts / week average</span>
            </div>
            <div className="calendar-grid">
              {DAY_LABELS.map((label) => (
                <div className="calendar-day-label" key={label}>
                  {label}
                </div>
              ))}
              {CALENDAR_DAYS.map(({ day, color }) => (
                <div className="calendar-cell" key={day}>
                  {day}
                  {color && (
                    <span
                      className="pillar-dot"
                      style={{ background: `var(--${color})` }}
                    ></span>
                  )}
                </div>
              ))}
            </div>
            <div className="legend">
              {LEGEND.map((item) => (
                <div className="legend-item" key={item.label}>
                  <span
                    className="legend-dot"
                    style={{ background: `var(--${item.color})` }}
                  ></span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="showcase-block">
          <div className="showcase-block-head">
            <h3>Content Pillars</h3>
            <p>The four themes every post is planned around</p>
          </div>
          <div className="pillars-grid">
            {PILLARS.map((pillar) => (
              <div className="pillar-card" key={pillar.title}>
                <div
                  className="pillar-swatch"
                  style={{ background: `var(--${pillar.color})` }}
                ></div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-block">
          <div className="showcase-block-head">
            <h3>Sample Captions</h3>
            <p>Written in the client's brand voice</p>
          </div>
          <div className="caption-samples">
            {CAPTIONS.map((caption) => (
              <div className="caption-card" key={caption.platform}>
                <span className="platform-tag">{caption.platform}</span>
                <p>{caption.text}</p>
                <span className="hashtags">{caption.hashtags}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-block">
          <div className="showcase-block-head">
            <h3>Engagement &amp; Hashtag Strategy</h3>
            <p>How the account grows and stays active between posts</p>
          </div>
          <div className="strategy-cols">
            <div className="strategy-col">
              <h4>Engagement Approach</h4>
              <ul>
                {ENGAGEMENT_APPROACH.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="strategy-col">
              <h4>Hashtag Framework</h4>
              <div className="hashtag-groups">
                {HASHTAG_GROUPS.map((group) => (
                  <span key={group.label}>
                    <b>{group.label}</b> {group.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-block">
          <div className="showcase-block-head">
            <h3>Sample Monthly Report</h3>
            <p>Placeholder figures — monthly report format</p>
          </div>
          <div className="stats-row">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
