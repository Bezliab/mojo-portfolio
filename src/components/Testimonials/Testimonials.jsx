import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      "Mojisola took over our social media completely and I finally stopped worrying about it. Our page looks professional and consistent, and I get more enquiries through Instagram than I ever did before.",
    initials: 'CN',
    name: '[Client Name]',
    role: '[Business Name / Role]',
  },
  {
    quote:
      "What stands out most is how organised she is. Deadlines are never missed, communication is clear, and I never have to follow up twice. It genuinely feels like having a full team member.",
    initials: 'CN',
    name: '[Client Name]',
    role: '[Business Name / Role]',
  },
  {
    quote:
      "She brought so much clarity to our content — from the calendar to the captions to the actual strategy behind it. Our engagement has grown steadily every month since we started working together.",
    initials: 'CN',
    name: '[Client Name]',
    role: '[Business Name / Role]',
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Kind Words</span>
          <h2>What clients say about working together.</h2>
          <p>Placeholder testimonials below — ready to be swapped for genuine client or employer reviews.</p>
        </div>
        <div className="testimonial-scroller">
          {TESTIMONIALS.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <span className="quote-mark">&ldquo;</span>
              <p>{testimonial.quote}</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p className="placeholder-note">Placeholder testimonial — replace with a real review</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
