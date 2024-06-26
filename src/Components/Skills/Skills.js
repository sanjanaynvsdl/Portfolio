import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      title: 'Languages & Databases',
      skills: [
        { name: 'Java', image: require("../Assets/java.png") }, // Assuming image paths are correct
        { name: 'Python', image: require("../Assets/python.png") },
        { name: 'MySQL', image: require("../Assets/mysql.png") },
        {name : 'JavaScript', image: require("../Assets/js.png")},
      ],
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'React', image: require("../Assets/react.png") },
        { name: 'Nodejs', image: require("../Assets/nodejs.png") },
        {name:'spring', image: require("../Assets/spring.png")},
      ],
      
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', image: require("../Assets/git.png") },
        // { name: 'Docker', image: require("../Assets/docker.png") },
      ],
    },
    // ... other skill categories
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <p>"I enjoy learning various skills and exploring new technologies to tackle different challenges effectively."</p>
      {skillsData.map((skillCategory) => (
        <div className={`skill-category ${skillCategory.className || ''}`} key={skillCategory.title}>
          <h3>{skillCategory.title}</h3>
          <div className="skills-container">
            {skillCategory.skills.map((skill) => (
              <div className="skill" key={skill.name || skill}>
                {skill.image && (
                  <img
                    src={skill.image}
                    alt={skill.name || skill}
                    className="skill-icon"
                  />
                )}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
