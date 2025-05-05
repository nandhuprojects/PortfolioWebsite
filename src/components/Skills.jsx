import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", percentage: 85 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 95 },
        { name: "React.js", percentage: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", percentage: 85 }
      ]
    },
    {
      category: "Data & AI",
      items: [
        { name: "TensorFlow", percentage: 80 },
        { name: "Machine Learning", percentage: 85 },
        { name: "Data Science", percentage: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div className="skill-group" key={index}>
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;