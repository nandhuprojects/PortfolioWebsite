import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              {/* Your profile image */}
              <img 
                src="/images/profile.jpg" 
                alt="Nandhakumar V M" 
                className="profile-image" 
              />
            </div>
          </div>
          <div className="about-text">
            <h3>I'm Nandhakumar V M</h3>
            <h4>Full Stack Developer specializing in MERN</h4>
            <p>
              I am a passionate MERN stack developer with expertise in building robust and 
              scalable web applications. With a strong foundation in MongoDB, Express.js, 
              React.js, and Node.js, I create seamless user experiences backed by 
              powerful server-side solutions.
            </p>
            <p>
              My journey in web development began with a fascination for creating 
              interactive user interfaces, which led me to dive deep into the world of 
              full-stack development. I am constantly learning and adapting to new 
              technologies to stay at the forefront of web development.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">nanuprojects@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Chennai, Tamil Nadu, India</span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Full-time, Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;