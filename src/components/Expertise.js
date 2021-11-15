import React from 'react';
import PropTypes from 'prop-types';
import '../styles/expertise/Expertise.css';

function Expertise({ setIsOpen }) {
  return (
    <section className="expertise">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="go-back"
      >
        Go Back
      </button>
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
