import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data';

function Games() {
  const gamesData = projectsData.filter((project) => project.category === 'Game');

  return (
    <div className="projects-wrapper games">
      {
        gamesData.map((project) => <ProjectCard key={project.name} props={project} />)
    }
    </div>
  );
}

export default Games;
