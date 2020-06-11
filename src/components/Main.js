import React from 'react';

import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const Main = () => (
  <>
    <Projects />
    <Skills />
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <About />
      <Contact />
    </div>
  </>
);

export default Main;