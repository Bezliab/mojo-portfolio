import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Skills from './components/Skills/Skills.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Showcase from './components/Showcase/Showcase.jsx';
import Process from './components/Process/Process.jsx';
import WhyWorkWithMe from './components/WhyWorkWithMe/WhyWorkWithMe.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Experience from './components/Experience/Experience.jsx';
import Resume from './components/Resume/Resume.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Showcase />
        <Process />
        <WhyWorkWithMe />
        <Testimonials />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
