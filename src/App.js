import './styles/global.scss';
import { useScrollSignals } from './lib/motion';
import Backdrop from './components/Backdrop';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Engineering from './components/Engineering';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useScrollSignals();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Backdrop />
      <Nav />
      <main id="main">
        <Hero />
        <Capabilities />
        <About />
        <Experience />
        <Projects />
        {/* <Engineering /> */}
        <Achievements />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
