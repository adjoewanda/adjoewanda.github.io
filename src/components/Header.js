import React from 'react';

import './Header.css';

const Header = () => (
  <div className="Header container-fluid jumbotron jumbotron-fluid bg-transparent d-flex align-items-center" >
    <header className="header-section ">
        <div>
          <div className="hero">
            <h1>Anthony Djoewanda</h1>
            <p>Web Developer and Designer.<br />
              Background in Ecommerce and Retail.<br />
              Websites, Online Stores, and More.</p>
          </div>
          <p>Connect @tonychuaco</p>
          <ul>
            <li><a href="https://twitter.com/tonychuaco/" target="_blank rel=noopener"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tonychuaco" title="LinkedIn" target="_blank rel=noopener"><i className="fa fa-linkedin-square"></i></a></li>
            <li><a href="https://github.com/tonychuaco" title="GitHub" target="_blank rel=noopener"><i className="fa fa-github"></i></a></li>
          </ul>
        </div>  
    </header>
  </div> 
);

export default Header;