import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">NANDHAKUMAR V M</span></h1>
        <h2>MERN Stack Developer</h2>
        <p>Building modern web applications with passion and precision.</p>
        <div className="hero-buttons">
          <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
            Hire Me
          </Link>
          <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/nandhuprojects" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/images/icons/social/github.svg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/nanuprojects/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/images/icons/social/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/wtf.nandhu?igsh=ZTFwcmc0eGljYW94" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/images/icons/social/instagram.svg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500}>
          <img src="/images/icons/navigation/chevron-down.svg" alt="Scroll Down" className="scroll-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
