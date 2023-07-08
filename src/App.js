import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Topbar from "./components/Topbar/Topbar";
import "./App.scss"
import { useEffect, useState } from "react";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Back from "./components/Background/Back";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handelScroll = () => {
    console.log("first")
    AOS.refresh();
  }
  return (
    <div className="App">
      <Topbar/>
      {/* <Back/> */}
      <div onScroll={handelScroll} id="sections" className="sections">
        <Intro/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
