import "./About.css";

const QUALITIES = [
  {
    title: "Organisation",
    description: "Systems that keep every task and file findable",
    icon: (
      <path
        d="M4 6h16M4 12h10M4 18h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Communication",
    description: "Clear updates, no chasing for answers",
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
    title: "Creativity",
    description: "Content ideas that feel fresh, not templated",
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
    title: "Time Management",
    description: "Deadlines treated as promises, not suggestions",
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 7.5V12l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Attention to Detail",
    description: "Typo-free captions and error-free calendars",
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
    title: "Problem-Solving",
    description: "Finding the workaround before it becomes a crisis",
    icon: (
      <>
        <path
          d="M12 4v4M12 16v4M4 12h4M16 12h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3.4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </>
    ),
  },
  {
    title: "Adaptability",
    description: "Comfortable switching tools, tone and priorities",
    icon: (
      <>
        <path
          d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 4v4h-4M6 20v-4h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Professionalism",
    description: "Reliable, discreet, and easy to work with",
    icon: (
      <>
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
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
              I believe an organized business is a business that can breathe. My
              job is to make sure that nothing important ever falls through the
              cracks.
            </p>
            <cite>— Mojisola Esther</cite>
          </div>
        </div>
        <div className="about-copy">
          <span className="section-tag">About Me</span>
          <p>
            Hi, I’m Mojisola Esther — a Virtual Assistant, Content Creator,
            Social Media Manager and AI Video Editor who genuinely enjoys the
            behind-the-scenes work that helps businesses stay organized,
            communicate clearly and show up consistently online.
          </p>

          <p>
            I love turning scattered ideas, busy schedules and unfinished tasks
            into something clear and manageable. Whether it’s organizing
            calendars and workflows, managing information, planning social media
            content, writing captions, editing videos or keeping track of
            deadlines, I enjoy making things easier for the people and
            businesses I support.
          </p>

          <p>
            My journey into the digital workspace started with a strong interest
            in helping people work smarter. Along the way, I discovered that I
            naturally enjoy bringing structure to busy workflows while also
            understanding the creative side of building a brand. That
            combination led me to develop skills across virtual assistance,
            administrative support, content creation, social media management
            and AI-powered video editing.
          </p>

          <p>
            As a Virtual Assistant, I can help with everything from task and
            calendar organization, research and data management to email
            support, content scheduling, workflow management and day-to-day
            administrative tasks. I’m comfortable working with tools like
            Trello, Slack, Notion, Canva, Calendly, Gemini, Claude and HubSpot,
            and I understand that good support is about being organized,
            responsive and dependable.
          </p>

          <p>
            On the creative side, I enjoy helping brands turn ideas into content
            people can connect with. I work on content ideas, captions, content
            pillars, social media calendars, promotional materials and
            short-form video concepts, while making sure everything stays
            aligned with the brand’s voice and goals.
          </p>

          <p>
            I’ve also developed skills in AI video editing and content
            production, combining creativity with emerging technology to create
            engaging visual content. I enjoy exploring new tools and finding
            practical ways to make content creation more efficient without
            losing the quality or personality that makes a brand unique.
          </p>

          <p>
            I’m the person who enjoys turning a messy list of tasks into a
            structured workflow, planning content before it becomes urgent,
            checking the little details others might overlook, and making sure
            every task has a clear purpose. I’d rather ask one clarifying
            question upfront than make an assumption that creates a bigger
            problem later.
          </p>

          <p>
            I value reliability, clear communication, professionalism,
            creativity, confidentiality and meeting deadlines. I’m also
            committed to continuous learning, and I’ve strengthened my skills
            through training, practical assignments and hands-on projects —
            especially in digital content creation and video editing.
          </p>

          <p>
            Today, I’m building my career around supporting business owners,
            entrepreneurs, coaches, creatives and growing brands with the
            digital work that keeps things moving. Whether you need someone to
            organize your workload, manage your social media, create content,
            edit videos, research information or simply provide reliable
            day-to-day support, I want to be someone you can hand the work to
            and trust it will be handled professionally.
          </p>

          <p>
            I bring together two things I believe are incredibly valuable in
            today’s digital workspace: organization and creativity. My goal is
            simple — to take work off my clients’ plates, help their brands stay
            consistent and professional, and give them more time to focus on
            what they do best.
          </p>

          <p>
            I’m still learning, growing and expanding my experience, but I
            approach every project with curiosity, responsibility, attention to
            detail and a genuine desire to deliver work that makes a difference.
            I don’t just want to complete tasks; I want to become a trusted part
            of the team.
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
