import React from 'react';

const About = () => (
  <section className="container">
    <div className="row d-md-flex justify-content-center">
      <div className="col-md-3 col-lg-4 col-xl-3">
        <h2>About <span className="text-muted">Me</span></h2>
      </div>
      <div className="col-md-9 col-lg-8 col-xl-7">
        <p>I am based in New York City, US, and a graduate from CUNY TechWorks one-year Program in Software Development.</p>
        <p>In my downtime I like to learn foreign languages and different cultures. I'm currently tuning in on Rakuten Viki and Spotify to try to pick up Mandarin. My goal is to become a polyglot and speaks multiple languages in addition to JavaScript, so that I can someday travel the world in 80 days and meet new people.</p>
      </div>
    </div>
  </section>
);

export default About;