import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navbar/Navbar.css';

function Navbar({ isOpen }) {
  return (
    <nav className="navbar">
      <div className="nav-list">
        <NavLink to="/" className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
          <i className="home icon active" />
        </NavLink>
        <NavLink to={isOpen ? '/about' : '/expertise'} className={(navData) => (navData.isActive ? 'active-navlink' : 'nav-btn')}>
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

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;
