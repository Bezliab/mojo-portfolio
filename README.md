# Mojisola Esther — Portfolio (React SPA)

A React single-page app recreation of the Mojisola Esther portfolio site
(Virtual Assistant, Content Creator & Social Media Manager), built with
Vite. Every section of the page is its own component with its own
stylesheet, living in its own folder under `src/components`.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
index.html                  Page shell + Google Fonts (Fraunces, Inter)
src/
  main.jsx                  React entry point
  App.jsx                   Assembles every section, in page order
  index.css                 Design tokens (colors, type, spacing) +
                             resets + shared classes (.wrap, .section,
                             .btn, .section-head, etc.)
  components/
    Header/                 Sticky nav, scroll shadow, mobile menu
    Hero/                   Headline + staggered entrance animation
    About/                  Bio + pull-quote + quality grid
    Services/                Three service offering cards
    Skills/                  Tools & skills chip groups
    Portfolio/               Filterable project grid ("My Work")
    Showcase/                 Social media management showcase (sample
                              content calendar, pillars, captions,
                              engagement strategy, sample analytics)
    Process/                  Five-step content process
    WhyWorkWithMe/             Pull quote + reasons grid
    Testimonials/              Client testimonial cards
    Experience/                 Work experience timeline
    Resume/                     CV download banner
    Contact/                    Contact info + front-end demo form
    Footer/                     Site footer
```

## Notes

- The contact form is a front-end-only demo: submitting it shows a
  success message and resets the fields, but nothing is actually sent
  anywhere. Wire `handleSubmit` in `src/components/Contact/Contact.jsx`
  up to your email service or form handler (e.g. Formspree, Resend, a
  serverless function) to receive real submissions.
- All content in Portfolio, Testimonials, Experience and Resume is
  placeholder copy (bracketed `[Client Name]`-style text) — swap it
  for real projects, quotes, roles and a real CV file/link.
- The hero photo is a styled monogram placeholder
  (`src/components/Hero/Hero.jsx`) — swap the `.hero-photo` block for
  an `<img>` when you have a real photo.
- Every icon in the site is inline SVG (no icon library dependency).
