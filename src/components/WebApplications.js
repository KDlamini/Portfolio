import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data';

function WebApplications() {
  const applicationsData = projectsData.filter((project) => project.category === 'Web Application');

  return (
    <div className="projects-wrapper applications">
      {
        applicationsData.map((project) => <ProjectCard key={project.name} props={project} />)
      }
    </div>
  );
}

export default WebApplications;
