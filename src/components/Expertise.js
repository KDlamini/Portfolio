/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Outlet, NavLink, useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/expertize/Expertise.css';

function Expertise({ setIsOpen }) {
  const navigate = useNavigate();

  return (
    <section className="expertise">
      <div className="navigation-tab">

        <button
          type="button"
          onClick={() => { navigate('/about'); setIsOpen(true); }}
          className="go-back"
        >
          <i className="chevron left icon" />
          Go Back
        </button>

        <NavLink to="skills" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Skills</NavLink>
        <NavLink to="experience" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Experience</NavLink>
        <NavLink to="education" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Education</NavLink>
        <NavLink to="certification" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>Certification</NavLink>
      </div>

      <div className="expertise-content">
        <Outlet />
      </div>
    </section>
  );
}

Expertise.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Expertise;
