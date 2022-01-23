import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/projects/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <div className="navigation-tab">
        <NavLink to="all" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>All</NavLink>
        <NavLink to="web applications" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Web applications</NavLink>
        <NavLink to="games" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Games</NavLink>
        <NavLink to="e-commerce" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>E-commerce</NavLink>
      </div>

      <div className="project-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Projects;
