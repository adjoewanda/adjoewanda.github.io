import React from 'react';

const Contact = () => (
  <section className="container">
    <div className="row d-md-flex justify-content-center">
      <div className="col-md-3 col-lg-4 col-xl-3">
        <h2>Contact <span className="text-muted">Me</span></h2>
      </div>
      <div className="col-md-9 col-lg-8 col-xl-7">
        <p className="">Connect @tonychuaco</p>
        <hr className="my-4" />
        <ul className="list-unstyled d-flex display-4">
          <li className="mr-3"><a className="text-secondary" href="https://twitter.com/tonychuaco/" target="_blank rel=noopener"><i className="fa fa-twitter"></i></a></li>
          <li className="mr-3"><a className="text-secondary" href="https://www.linkedin.com/in/tonychuaco" title="LinkedIn" target="_blank rel=noopener"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a className="text-secondary" href="https://github.com/tonychuaco" title="GitHub" target="_blank rel=noopener"><i className="fa fa-github"></i></a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Contact;