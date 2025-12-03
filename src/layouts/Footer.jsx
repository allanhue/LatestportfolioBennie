import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import '../css/footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            {/* <h3 className="footer-brand">Allan.</h3> */}
            <p className="footer-tagline">Data Practitioner</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#/about">About</a></li>
              <li><a href="#/experience">Experience</a></li>
              <li><a href="#/projects">Projects</a></li>
              <li><a href="#/certifications">Certifications</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:allanmwangi329@gmail.com">Email</a></li>
              <li><a href="https://github.com/allanhue" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/allan-mwangi-626902302/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Follow</h4>
            <div className="footer-social">
              <a href="https://github.com/allanhue" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/allan-mwangi-626902302/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:allanmwangi329@gmail.com" className="social-icon" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Allan Mwangi. All rights reserved.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
