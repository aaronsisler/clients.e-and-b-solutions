import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import projects from "../../content/projects";

import "./portfolio-container.scss";

const PortfolioContainer = () => (
  <div className="portfolio-container">
    {projects.map(project => (
      <Hyperlink
        className="portfolio-container__project"
        key={project.projectId}
        href={`/project?projectId=${project.projectId}`}
        title={`${project.projectId}`}
      />
    ))}
  </div>
);

export default PortfolioContainer;
