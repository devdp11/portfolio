import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarIndex from "../components/navbar";

import AboutMeSection from "./layouts/about";
import ProjectsSection from "./layouts/projects";
import SkillsSection from "./layouts/skills";
import ContactsSection from "./layouts/contacts";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <Router>
      <NavbarIndex aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactsRef={contactsRef} />

      <main>
        <section id="about" ref={aboutRef}>
          <AboutMeSection />
        </section>
        <section id="projects" ref={projectsRef}>
          <ProjectsSection />
        </section>
        <section id="skills" ref={skillsRef}>
          <SkillsSection />
        </section>
        <section id="contacts" ref={contactsRef}>
          <ContactsSection />
        </section>
      </main>
    </Router>
  );
}

export default App;
