import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/projects/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <div className="project-tabs">
        <NavLink to="skills" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>All</NavLink>
        <NavLink to="experience" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Web applications</NavLink>
        <NavLink to="education" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Games</NavLink>
        <NavLink to="certification" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>E-commerce</NavLink>
      </div>

      <div className="project-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Projects;
