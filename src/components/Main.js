import React from 'react';

import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import img1 from './../images/west4-thumbnail.png';

const Main = () => (
  <>
    <Projects />
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <About />
      <Contact />
    </div>
  </>
);

export default Main;