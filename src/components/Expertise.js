/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import {
  Routes, Route, Link, useNavigate,
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

  console.log(isOpen);

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

        <Link to="" className="tab-item">skills</Link>
        <Link to="experience" className="tab-item">education</Link>
        <Link to="education" className="tab-item">experience</Link>
      </div>

      <div className="expertise-content">
        <Routes>
          <Route path="/" element={<Skills />} />
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
