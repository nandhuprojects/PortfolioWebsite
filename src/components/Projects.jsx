import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Basic E-commerce Website",
      category: "frontend",
      image: "react-ecommerce2.jpg",
      description: "A responsive e-commerce website built with vanilla HTML, CSS, and JavaScript featuring product listings, shopping cart functionality, and checkout process.",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Responsive Design"],
      liveLink: "https://basic-ecommerce.example.com",
      githubLink: "https://github.com/nandhuprojects"
    },
    {
      id: 2,
      title: "E-commerce Website using React",
      category: "react",
      image: "react-ecommerce.jpg",
      description: "A full-featured e-commerce application built with React featuring product filtering, user authentication, state management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveLink: "https://react-ecommerce.example.com",
      githubLink: "https://github.com/nandhuprojects"
    },
    {
      id: 3,
      title: "Smart Apartment Maintenance System",
      category: "fullstack",
      image: "apartment-maintenance.jpg",
      description: "An intelligent system for apartment maintenance management, allowing residents to report issues, track repairs, and communicate with maintenance staff.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT Authentication"],
      liveLink: "https://smart-apartment.example.com",
      githubLink: "https://github.com/nandhuprojects"
    },
    {
      id: 4,
      title: "Simple Portfolio",
      category: "frontend",
      image: "simple-portfolio.jpg",
      description: "A clean and responsive personal portfolio website showcasing projects, skills, and professional information with smooth animations and modern design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP Animation", "Responsive Design"],
      liveLink: "https://portfolio.example.com",
      githubLink: "https://github.com/nandhuprojects"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} 
            onClick={() => setFilter('frontend')}
          >
            HTML/CSS/JS
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`} 
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img 
                  src={`/images/projects/${project.image}`} 
                  alt={project.title} 
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <img src="/images/icons/project/external-link.svg" alt="Live Site" className="project-icon" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <img src="/images/icons/social/github.svg" alt="GitHub Repo" className="project-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;