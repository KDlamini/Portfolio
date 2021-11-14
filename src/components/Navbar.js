import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-list">
        <NavLink to="/" className="nav-btn" activeclassname="active-navlink">
          <i className="home icon active" />
        </NavLink>
        <NavLink to="/about" className="nav-btn" activeclassname="active-navlink">
          <i className="info icon" />
        </NavLink>
        <NavLink to="/projects" className="nav-btn" activeclassname="active-navlink">
          <i className="tasks icon" />
        </NavLink>
        <NavLink to="/contact" className="nav-btn" activeclassname="active-navlink">
          <i className="tty icon" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
