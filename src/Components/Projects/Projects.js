import React from 'react';
import './Projects.css';
// import React from 'react';

const projects = [
  {
    title: 'Patient Record System',
    description:
      'Backend system for a hospital to manage patient records. This project was made to understand the basics of backend development, API creation and database management. The project was made using spring bootand java.',
    image: 'path/to/wiggles.jpg', // Replace with the path to your image
    github: 'https://github.com/sanjanaynvsdl/Patient_Record_System', // Replace with your project URL
    // demo: 'https://your-wiggles-demo.com', // Replace with your project URL
  },
  {
    title: 'Yulu_Analysis',
    description:
      'A data analysis project on the Yulu bike sharing system in Bangalore. The project was made to understand data analysis, data visualization and data interpretation. The project was made using python and jupyter notebook.',
    image: 'path/to/newsletter.jpg', // Replace with the path to your image
    github: 'https://github.com/sanjanaynvsdl/Yulu_Analysis', // Replace with your project URL
    // demo: 'https://your-newsletter-demo.com', // Replace with your project URL
  },
  {
    title: 'Fake store_Api',
    description:
      'A project to understand API creation and data management. The project was made using spring boot. The project was made to understand the basics of API creation and data management.',
    image: 'path/to/newsletter.jpg', // Replace with the path to your image
    github: 'https://github.com/sanjanaynvsdl/FakeStore_Api', // Replace with your project URL
    // demo: 'https://your-newsletter-demo.com', // Replace with your project URL
  },
  // ... Add more projects here
];

function Projects() {
  return (
    <section className="projects">
      <h2>My <span>Projects</span></h2>
      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          {/* <img src={project.image} alt={project.title} /> */}
          <p>{project.description}</p>
          <div>
            <a href={project.github} target="_blank" rel="noreferrer">
              Github
            </a>
            {/* <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a> */}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
