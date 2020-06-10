import React from 'react';

import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import img1 from './../images/west4-thumbnail.png';

const Main = () => (
  <>
    <Projects />
    <div className="project-container container">
      <div id="project1" className="projectItems">
        <div className="col-lg-8">
          <img alt="placeholder" src={img1} />
        </div>
        <div className="col-lg-4">
          <h2>Tip Calculator</h2>
          <p>Project codename West4, the challenge for this school project is to create a calculator to compute the tip amounts and total based on user input, using functions, conditions, and arithmetic operators. The finished product is an online tip calculator built with a live feature that automatically displays and changes the total as you type. Made with HTML, CSS, Javascript.</p>
          <a className="btn btn-dark" href="https://tonychuaco.github.io/west4" target="_blank rel=noopener" title="View Demo">View Demo <i className="material-icons">open_in_new</i></a>
          <a className="btn btn-dark" href="https://github.com/tonychuaco/west4" target="_blank rel=noopener" title="Download Source">Get Source <i className="material-icons">open_in_new</i></a>      
        </div>
      </div>    
    </div>
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <About />
      <Contact />
    </div>
  </>
);

export default Main;