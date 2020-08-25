import React from 'react';

import whitecoffee from './../images/white-coffee-thumbnail.jpg';
import acc from './../images/advanced-copy-center-thumbnail.jpg';
import mtgfan from './../images/mtgfan-thumbnail.png';
import elmhurst from './../images/elmhurst-thumbnail.png';
import mytravel from './../images/mytravel-thumbnail.png';

const Projects = () => {
  
  const content = [
    {
      key: 0,
      title: "White Coffee",
      src: whitecoffee,
      demoURL: "https://whitecoffee.com",
      githubURL: null,
      description: "This web design project is for a local business in New York City. The primary objective of the project is to redesign the website for potential clients to learn more about the company and products, as well as for consumers to shop online. Made with CSS, HTML, and Squarespace."
    }, {
      key: 1,
      title: "Advanced Copy Center Website",
      src: acc,
      demoURL: "https://advancedcopycenter.web.app",
      githubURL: null,
      description: "This freelance project is for a local printing company in New York City. The primary objective of the project is to create a website where users can contact and submit their print job inquiries online. Made with JavaScript, React, CSS, HTML, Bootstrap, and Firebase."
    }, {
      key: 2,
      title: "MTG Fan",
      src: mtgfan,
      demoURL: "https://mtgfan.herokuapp.com/",
      githubURL: "https://github.com/tonychuaco/mtgfan/",
      description: "This passion project for a React coursework is a tribute to Magic The Gathering, one of my favorite trading card games growing up. \"As a fan, I wanted to share my passion for Magic and showcase their gorgeous artworks\". Made with JavaScript, React, CSS, HTML, and Bootstrap."
    }, {
      key: 3,
      title: "Elmhurst",
      src: elmhurst,
      demoURL: "https://tonychuaco.github.io/elmhurst/",
      githubURL: "https://github.com/tonychuaco/elmhurst/",
      description: "The challenge for this school project is to develop a website that introduces Elmhurst neighborhood in New York City. Final project for course in Web Technology I: Building and Maintaining Web Sites. This project uses gulp.js built tool. Made with CSS, Bootstrap, HTML."
    }, {
      key: 4,
      title: "MYtravel",
      src: mytravel,
      demoURL: "https://et712-dad.github.io/mytravel/",
      githubURL: "https://github.com/ET712-DAD/mytravel",
      description: "The challenge for this school project is to develop a travel planning web app that will make it easier for anyone to make a travel plan and explore new cities. Role: I worked in a 3-person team as a front-end developer and created the AJAX application for MYtravel. Front-End: JavaScript, jQuery, JSON, CSS, Bootstrap, HTML, Foursquare API, Leaflet.js, Mapbox API Deliverables: 1. Created a Google Map inspired web mapping service. 2. Created AJAX request using query from user to get JSON data of venue recommendations from Foursquare API. 3. Set up a proxy server on Node.js / Express.js and deployed it on Heroku."
    }

  ];

  const projects = content.map(project => {

    const { key, title, src, demoURL, githubURL, description } = project;

    return (
      <div key={key} className="project-container container">
        <div id="project1" className="projectItems">
          <div className="col-lg-8">
            <a href={demoURL} target="_blank rel=noopener"><img className="shadow-sm" alt="placeholder" src={src} /></a>
          </div>
          <div className="col-lg-4">
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="btn btn-dark" href={demoURL} target="_blank rel=noopener" title="View Site">View Site <i className="material-icons">open_in_new</i></a>
            {(githubURL === null) ? "" : <a className="btn btn-dark" href={githubURL} target="_blank rel=noopener" title="View repo on GitHub">Go to GitHub <i className="material-icons">open_in_new</i></a>}      
          </div>
        </div>    
      </div>
    )
  });

  return projects;
};

export default Projects;