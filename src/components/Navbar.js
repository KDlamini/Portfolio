import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-list">
        <NavLink to="/" className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
          <i className="home icon active" />
        </NavLink>
        <NavLink to="/about" className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
          <i className="info icon" />
        </NavLink>
        <NavLink to="/projects" className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
          <i className="tasks icon" />
        </NavLink>
        <NavLink to="/contact" className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
          <i className="tty icon" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
