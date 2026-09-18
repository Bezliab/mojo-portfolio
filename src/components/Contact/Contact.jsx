import { useRef, useState } from 'react';
import './Contact.css';

const CHANNELS = [
  {
    href: 'mailto:hello@mojisolaesther.com',
    label: 'Email',
    value: 'hello@mojisolaesther.com',
    external: false,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    href: 'https://linkedin.com/in/mojisolaesther',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mojisolaesther',
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 10.5v6M8 7.8v.01M12.2 16.5v-3.6c0-1.2.8-2 2-2s1.8.8 1.8 2v3.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    href: 'https://instagram.com/mojisolaesther',
    label: 'Instagram',
    value: '@mojisolaesther',
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
      </>
    ),
  },
];

const SERVICE_OPTIONS = [
  'Virtual Assistance',
  'Social Media Management',
  'Content Creation',
  'A mix of the above',
  'Not sure yet',
];

const INITIAL_FORM = { name: '', email: '', company: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Front-end demo only — connect this to your email service or form handler
    // to receive real submissions.
    setSubmitted(true);
    setForm(INITIAL_FORM);
    successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>
          <h2>Ready to take your business to the next level?</h2>
          <p>
            Tell me a bit about what you need — whether it's ongoing support, a one-off content
            project, or full social media management — and I'll get back to you within one
            business day.
          </p>
          <div className="contact-channels">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="contact-channel"
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener' : undefined}
              >
                <span className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {channel.icon}
                  </svg>
                </span>
                <div>
                  <strong>{channel.label}</strong>
                  <span>{channel.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className={`form-success${submitted ? ' show' : ''}`} ref={successRef}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Thanks — your message has been noted. I'll be in touch within one business day.
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="company">Company / Business</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your business name"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your business and what you need help with..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Let's Work Together
          </button>
          <p className="form-note">
            This form is a front-end demo — connect it to your email service or form handler to
            receive real submissions.
          </p>
        </form>
      </div>
    </section>
  );
}
