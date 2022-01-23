import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data';

function All() {
  return (
    <div className="projects-wrapper">
      {
        projectsData.map((project) => <ProjectCard key={project.name} props={project} />)
      }
    </div>
  );
}

export default All;
