import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <img src="/images/icons/contact/map-marker.svg" alt="Location" className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <img src="/images/icons/contact/envelope.svg" alt="Email" className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>nanuprojects@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <img src="/images/icons/contact/phone.svg" alt="Phone" className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 63791 63589</p>
              </div>
            </div>
            
            <div className="social-media">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/nandhuprojects" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/social/github.svg" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/nanuprojects/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/social/linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://x.com/NANDHAK42841230" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/social/twitter.svg" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/wtf.nandhu?igsh=ZTFwcmc0eGljYW94" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/social/instagram.svg" alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${submitStatus ? submitStatus : ''}`}
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? 'Sending...' : 
                 submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;