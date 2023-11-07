import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  const displayTags = project.tags.slice(0, 3); // Display only the first three tags

  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {displayTags.map((tag, index) => {
            return <label className="tag" key={index}>{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt="Project" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
