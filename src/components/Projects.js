import React from 'react';

import mtgfan from './../images/mtgfan-thumbnail.png';
import elmhurst from './../images/elmhurst-thumbnail.png';
import mytravel from './../images/mytravel-thumbnail.png';

const Projects = () => {
  
  const content = [
    {
      title: "MTG Fan",
      src: mtgfan,
      demoURL: "https://mtgfan.herokuapp.com/",
      githubURL: "https://github.com/tonychuaco/mtgfan/",
    }, {
      title: "Elmhurst",
      src: elmhurst,
      demoURL: "https://tonychuaco.github.io/elmhurst/",
      githubURL: "https://github.com/tonychuaco/elmhurst/",
    }, {
      title: "MYtravel",
      src: mytravel,
      demoURL: "https://et712-dad.github.io/mytravel/",
      githubURL: "https://github.com/ET712-DAD/mytravel",
    }

  ];

  const projects = content.map(project => {

    const { title, src } = project;

    return (
      <div className="project-container container">
        <div id="project1" className="projectItems">
          <div className="col-lg-8">
            <img alt="placeholder" src={src} />
          </div>
          <div className="col-lg-4">
            <h2>{title}</h2>
            <p>Project codename West4, the challenge for this school project is to create a calculator to compute the tip amounts and total based on user input, using functions, conditions, and arithmetic operators. The finished product is an online tip calculator built with a live feature that automatically displays and changes the total as you type. Made with HTML, CSS, Javascript.</p>
            <a className="btn btn-dark" href="https://tonychuaco.github.io/west4" target="_blank rel=noopener" title="View Demo">View Demo <i className="material-icons">open_in_new</i></a>
            <a className="btn btn-dark" href="https://github.com/tonychuaco/west4" target="_blank rel=noopener" title="Download Source">Get Source <i className="material-icons">open_in_new</i></a>      
          </div>
        </div>    
      </div>
    )
  });

  return projects;
};

export default Projects;