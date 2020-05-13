import React from 'react';

const Navbar = () => (
  <nav id="menuMain" className="main-menu">
    <div id="menuTop" className="menu-top">
      <div id="menuBtn"><i className="material-icons" aria-hidden="true">menu</i> Menu</div>
      <ul>
        <li><a href="index.html" title="Home">Home</a></li>
        <li><a href="about.html" title="About">About</a></li>
        <li><a href="contact.html" title="Contact">Contact</a></li>
        <li>
          <ul>
            <li><a href="https://twitter.com/tonychuaco/" target="_blank rel=noopener"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/tonychuaco" title="LinkedIn" target="_blank rel=noopener"><i className="fa fa-linkedin-square"></i></a></li>
            <li><a href="https://github.com/tonychuaco" title="GitHub" target="_blank rel=noopener"><i className="fa fa-github"></i></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;