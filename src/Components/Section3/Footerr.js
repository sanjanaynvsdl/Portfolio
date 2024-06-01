

import React from 'react';
import './Footerr.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Using a different icon for LeetCode

const Footerr = () => {
  return (
    <footer className="footer">
      <div className="developer-info">
        <p>Developed by Sanjana</p>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 SY</p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/sanjanaynvsdl" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/sanjana-yalamarthi-232b39281/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="mailto:sanjanayalamarthi@gmail.com" target="_blank"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="https://leetcode.com/u/sanjana_ynvsdl/" target="_blank"><FontAwesomeIcon icon={faCode} /></a>
      </div>
    </footer>
  );
}

export default Footerr;

