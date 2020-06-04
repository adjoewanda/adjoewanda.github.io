import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css';

const NavBar = () => (
  <Navbar fixed="top" className="NavBar text-white">
    <nav className="container d-flex justify-content-end text-align-right align-items-center pt-2 pr-2">
      <ul className="list-unstyled">
        <li><a href={process.env.PUBLIC_URL + '/anthony-djoewanda-resume-online.pdf'} title="View Resume" className="text-white"><FontAwesomeIcon icon={faDownload} /> Resume</a></li>
      </ul>
    </nav>
  </Navbar>
);

export default NavBar;