import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Esther transformed our social media pages from close to stagnancy to interactive and engaging. Our followers are growing, and we are getting more enquiries than ever before.",
    initials: "DBC",
    name: "Deborah Bamigboye",
    role: "Deborah Bams Fashion Academy / CEO",
  },
  {
    quote:
      "She recently started creating videos for my brand and I must say that I am impressed with her work. She is very creative and has a great eye for detail. I would highly recommend her to anyone looking for a talented video editor.",
    initials: "AI",
    name: "Adeniji Isaac",
    role: "Bezliab Creatives / CEO",
  },
  {
    quote:
      "Her organization and planning skills are top-notch. She is always on top of deadlines and ensures that everything runs smoothly. I would highly recommend her to anyone looking for a reliable and efficient executive assistant.",
    initials: "DBC",
    name: "Deborah Bamigboye",
    role: "Deborah Bams Creations / CEO",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Kind Words</span>
          <h2>What clients say about working together.</h2>
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
              {/* <p className="placeholder-note">
                Placeholder testimonial — replace with a real review
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
