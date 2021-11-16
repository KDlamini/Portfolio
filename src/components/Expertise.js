/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import {
  Routes, Route, NavLink, useNavigate, Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import '../styles/expertize/Expertise.css';

function Expertise({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      navigate('/about');
    }
    // console.log(isOpen);
  });

  return (
    <section className="expertise">
      <div className="about-tabs">

        <button
          type="button"
          onClick={() => { navigate('/about'); setIsOpen(true); }}
          className="go-back"
        >
          <i className="chevron left icon" />
          Go Back
        </button>

        <NavLink to="skills" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>skills</NavLink>
        <NavLink to="experience" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>education</NavLink>
        <NavLink to="education" className={(nav) => (nav.isActive ? 'buttonActive' : 'tab-item')}>experience</NavLink>
      </div>

      <div className="expertise-content">
        <Routes>
          <Route path="/" element={<Navigate to="skills" />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Routes>
      </div>
    </section>
  );
}

Expertise.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Expertise;
