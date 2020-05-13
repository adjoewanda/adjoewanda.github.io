import React from 'react';

import img1 from './../images/west4-thumbnail.png';
import img2 from './../images/penny-thumbnail.png';
import img3 from './../images/jenn-thumbnail.png';

const Main = () => (
  <>
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
  <div className="project-container container">
    <div id="project2" className="projectItems">
      <div className="col-lg-8">
        <img alt="placeholder" src={img2} />
      </div>
      <div className="col-lg-4">
        <h2>Age Calculator</h2>
        <p>Project codename Penny, the challenge for this school project is to create a calculator that computes the age at a given year based on user input. The finished product is an online tip calculator built with button inputs optimized for touchscreen devices. Made with HTML, CSS, JavaScript.</p>
        <a className="btn btn-dark" href="https://tonychuaco.github.io/penny" target="_blank rel=noopener" title="View Demo">View Demo <i className="material-icons">open_in_new</i></a>
        <a className="btn btn-dark" href="https://github.com/tonychuaco/penny" target="_blank rel=noopener" title="Download Source">Get Source <i className="material-icons">open_in_new</i></a>      
      </div>
    </div>
  </div>
  <div className="project-container container">
    <div id="project3" className="projectItems">
      <div className="col-lg-8">
        <img alt="placeholder" src={img3} />
      </div>
      <div className="col-lg-4">
        <h2>Cash Register</h2>
        <p>Project codename Jenn, the challenge for this school project is to create a function that takes shopping cart objects and return the total price. The finished deliverable is an interactive prototype that simulates a simplified online shopping experience with a single click of buttons. Made with HTML, CSS, JavaScript.</p>
        <a className="btn btn-dark" href="https://tonychuaco.github.io/jenn" target="_blank rel=noopener" title="View Demo">View Demo <i className="material-icons">open_in_new</i></a>
        <a className="btn btn-dark" href="https://github.com/tonychuaco/jenn" target="_blank rel=noopener" title="Download Source">Get Source <i className="material-icons">open_in_new</i></a>      
      </div>
    </div>
  </div>
  </>
);

export default Main;