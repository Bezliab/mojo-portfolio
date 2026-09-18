import './Process.css';

const STEPS = [
  {
    title: 'Discover',
    description:
      'Understanding the brand, the audience and the goal behind the content before anything gets created.',
  },
  {
    title: 'Strategize',
    description: 'Mapping content pillars, formats and timing into a plan that actually supports the goal.',
  },
  {
    title: 'Create',
    description: 'Writing, designing and producing the content — on-brand, polished and ready to publish.',
  },
  {
    title: 'Schedule',
    description:
      'Queuing content at the times your audience is most active, with a calendar you can see at a glance.',
  },
  {
    title: 'Analyse',
    description:
      "Reviewing what worked, what didn't, and feeding those insights back into the next round of content.",
  },
];

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">How I Work</span>
          <h2>A simple, five-step content process.</h2>
          <p>
            Every piece of content — from a single Instagram post to a full campaign — moves
            through the same five stages, so nothing gets rushed and nothing gets missed.
          </p>
        </div>
        <div className="process-track">
          {STEPS.map((step, index) => (
            <div className="process-step" key={step.title}>
              <div className="process-num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
