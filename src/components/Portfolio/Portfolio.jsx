import { useMemo, useState } from 'react';
import './Portfolio.css';

const FILTERS = [
  { value: 'all', label: 'All Projects' },
  { value: 'social', label: 'Social Media Design' },
  { value: 'calendar', label: 'Content Calendars' },
  { value: 'branding', label: 'Branding' },
  { value: 'admin', label: 'Admin & Email' },
  { value: 'strategy', label: 'Strategy' },
];

const PROJECTS = [
  {
    category: 'social',
    thumb: 'thumb-1',
    catLabel: 'Social Media Design',
    title: 'Instagram Feed Refresh — [Client Name]',
    description:
      'A full grid redesign moving a wellness brand from inconsistent posts to a cohesive, editorial-style feed with a repeatable template system.',
    role: 'Content Creator & Designer',
    tools: 'Canva, Instagram Planner',
    result: '+34% profile visits in 60 days',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    category: 'calendar',
    thumb: 'thumb-2',
    catLabel: 'Content Calendar',
    title: '30-Day Launch Calendar — [Client Name]',
    description:
      'A month-long content calendar built around a product launch, mapping content pillars, post types and captions to key sales dates.',
    role: 'Social Media Manager',
    tools: 'Notion, Google Sheets',
    result: 'Launch week engagement up 2.1x',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9h18M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    category: 'social',
    thumb: 'thumb-3',
    catLabel: 'Reels',
    title: 'Reels Series: Behind the Brand — [Client Name]',
    description:
      'A recurring short-form video series turning day-to-day business moments into relatable, shareable Reels for a boutique brand.',
    role: 'Content Creator',
    tools: 'CapCut, Canva',
    result: '4 Reels crossed 10K views',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
      </>
    ),
  },
  {
    category: 'branding',
    thumb: 'thumb-4',
    catLabel: 'Branding',
    title: 'Brand Voice & Story Guide — [Client Name]',
    description:
      'A brand storytelling document defining tone, key messages and caption style so every piece of content sounds consistently "on-brand".',
    role: 'Content Strategist',
    tools: 'Google Docs, Canva',
    result: 'Adopted across 3 platforms',
    icon: (
      <path
        d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.9L12 16.3 6.8 19.2l1-5.9-4.3-4.1 5.9-.9L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    category: 'admin',
    thumb: 'thumb-5',
    catLabel: 'Admin & Email',
    title: 'Inbox Zero System — [Client Name]',
    description:
      "A folder, label and template system built to take a founder's inbox from 600+ unread emails to a manageable daily routine.",
    role: 'Virtual Assistant',
    tools: 'Gmail, Google Workspace',
    result: 'Response time cut from 3 days to 24hrs',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    category: 'strategy',
    thumb: 'thumb-6',
    catLabel: 'Strategy',
    title: 'Social Growth Strategy — [Client Name]',
    description:
      'A quarter-long strategy covering audience research, content pillars, posting cadence and a hashtag framework for a service-based business.',
    role: 'Social Media Strategist',
    tools: 'Meta Business Suite, Notion',
    result: 'Follower growth +1,200 in Q1',
    icon: <path d="M4 19V9M12 19V5M20 19v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
  },
  {
    category: 'social',
    thumb: 'thumb-1',
    catLabel: 'Social Media Design',
    title: 'Product Launch Carousel — [Client Name]',
    description:
      "A five-slide Instagram carousel design breaking down a new product's benefits in a clean, easy-to-skim visual format.",
    role: 'Designer & Copywriter',
    tools: 'Canva',
    result: 'Highest-saved post that month',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 15l5-5 4 4 4-6 5 7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    category: 'calendar',
    thumb: 'thumb-2',
    catLabel: 'Content Calendar',
    title: 'Evergreen Content Bank — [Client Name]',
    description:
      'A bank of 60 ready-to-schedule posts organised by content pillar, giving a busy founder a full quarter of backup content.',
    role: 'Content Planner',
    tools: 'Trello, Canva',
    result: '3 months of content in 2 weeks',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="14" r="1.3" fill="currentColor" />
        <circle cx="13" cy="14" r="1.3" fill="currentColor" />
        <circle cx="8" cy="17.5" r="1.3" fill="currentColor" />
      </>
    ),
  },
  {
    category: 'admin',
    thumb: 'thumb-5',
    catLabel: 'Admin & Email',
    title: 'Newsletter & CRM Set-Up — [Client Name]',
    description:
      "End-to-end set-up of a client's email newsletter system, including templates, segmentation and a monthly sending calendar.",
    role: 'Virtual Assistant',
    tools: 'Mailchimp, Notion',
    result: 'Open rate improved to 41%',
    icon: (
      <>
        <path d="M4 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = useMemo(
    () => (activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section className="section section-alt" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">My Work</span>
          <h2>A look at recent projects.</h2>
          <p>
            A sample of the kind of work I take on — from Instagram content and Reels to content
            calendars, admin systems and full social strategies. Every project below is a
            placeholder, structured and ready to be swapped for real client work.
          </p>
        </div>

        <div className="filter-bar">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((project) => {
            const isHidden = !visibleProjects.includes(project);
            return (
              <div
                className={`portfolio-card${isHidden ? ' hidden' : ''}`}
                data-category={project.category}
                key={project.title}
              >
                <div className={`portfolio-thumb ${project.thumb}`}>
                  <span className="portfolio-cat">{project.catLabel}</span>
                  <svg viewBox="0 0 24 24" fill="none">
                    {project.icon}
                  </svg>
                </div>
                <div className="portfolio-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-meta">
                    <span>
                      <b>Role:</b> {project.role}
                    </span>
                    <span>
                      <b>Tools:</b> {project.tools}
                    </span>
                  </div>
                  <span className="portfolio-result">{project.result}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
