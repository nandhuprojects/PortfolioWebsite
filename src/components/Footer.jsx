import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>NANDHAKUMAR V M</h2>
            <p>MERN Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="hero" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>
              <img src="/images/icons/contact/envelope.svg" alt="Email" className="contact-icon" />
              <span>nanuprojects@gmail.com</span>
            </p>
            <p>
              <img src="/images/icons/contact/phone.svg" alt="Phone" className="contact-icon" />
              <span>+91 63791 63589</span>
            </p>
            <p>
              <img src="/images/icons/contact/map-marker.svg" alt="Location" className="contact-icon" />
              <span>Salem, Tamil Nadu, India</span>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} NANDHAKUMAR V M. All Rights Reserved.</p>
          <div className="footer-social">
            <a href="https://github.com/nandhuprojects" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/social/github.svg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/nanuprojects/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/social/linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://x.com/NANDHAK42841230" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/social/twitter.svg" alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-to-top">
        <Link to="hero" smooth={true} duration={500}>
          <img src="/images/icons/navigation/chevron-up.svg" alt="Scroll to top" className="scroll-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;