import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description for project 1", link: "#" },
    { title: "Project 2", description: "Description for project 2", link: "#" },
  ];

  return (
    <section id="projects" aria-label="My Projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
