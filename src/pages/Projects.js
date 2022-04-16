import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ModalContext from '../context/ModalContext';
import Popup from '../components/Popup';
import '../styles/projects/Projects.css';

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className="projects">
      <div className="navigation-tab">
        <NavLink to="all" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>All</NavLink>
        <NavLink to="web-applications" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Web applications</NavLink>
        <NavLink to="games" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Games</NavLink>
        <NavLink to="e-commerce" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>E-commerce</NavLink>
      </div>

      <div className="project-container">
        <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
          {
            modalIsOpen ? <Popup /> : null
          }
          <Outlet />
        </ModalContext.Provider>
      </div>
    </section>
  );
}

export default Projects;
