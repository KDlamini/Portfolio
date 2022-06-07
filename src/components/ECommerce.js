import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data';

function ECommerce() {
  const commerceData = projectsData.filter((project) => project.category === 'E-commerce');

  return (
    <div className="projects-wrapper e-commerce">
      {
        commerceData.map((project) => <ProjectCard key={project.name} props={project} />)
    }
    </div>
  );
}

export default ECommerce;
