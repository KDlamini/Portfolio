import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/expertise/Expertise.css';

function Expertise({ setIsOpen }) {
  return (
    <section className="expertise">
      <div className="about-tabs">

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="go-back"
        >
          <i className="chevron left icon" />
          Go Back
        </button>

        <Link to="/skills" className="tab-item">skills</Link>
        <Link to="/experience" className="tab-item">education</Link>
        <Link to="/education" className="tab-item">experience</Link>
      </div>

      <div className="expertise-content">
        Expertise Section.
      </div>
    </section>
  );
}

Expertise.propTypes = {
  setIsOpen: PropTypes.bool.isRequired,
};

export default Expertise;
