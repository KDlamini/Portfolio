/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import aboutImg from '../assets/profile_about.jpg';
import '../styles/about/About.css';

function About({ setIsOpen }) {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="about-banner">
        <div className="social-links">
          <a id="linkedin-btn" href="https://www.linkedin.com/in/simo-nkosi-418523180/" target="_blank" rel="noreferrer">
            <i className="linkedin icon" />
          </a>
          <a id="github-btn" href="https://github.com/KDlamini" target="_blank" rel="noreferrer">
            <i className="github icon" />
          </a>
          <a id="angellist-btn" href="https://angel.co/u/simo-nkosi" target="_blank" rel="noreferrer">
            <i className="angellist icon" />
          </a>
          <a id="twitter-btn" href="https://twitter.com/RealSimoNkosi" target="_blank" rel="noreferrer">
            <i className="twitter icon" />
          </a>
        </div>

        <div className="about-profile">
          <div className="about-img-wrapper">
            <img alt="Simo Nkosi about" src={aboutImg} className="about-img" />
          </div>
          <div className="about-text">
            <h1>About me</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              I specialize in vanilla JavaScript, React with Redux, NodeJS, Express,
              Mongoose/MongoDB, Ruby, Ruby-on-Rails, PostgreSQL, and many more
              exciting technologies.
            </p>
            <p>
              At Microverse, an international program for remote full-stack developers,
              I gained experience working remotely and collaboratively in teams through
              pair-programming using kanban tasks, Git and GitHub, pull requests, and code reviews.
              My soft skills include time management, handling expectations,
              great communication skills with fluency in English, critical thinking,
              working under pressure, and adapting to new technical skills in a short
              period of time.
              <br />
              <br />
              I am very passionate about problem-solving, conceptualizing, analyzing,
              and evaluating patterns in order to come up with the most efficient outcome.
              Open to exploring exciting full-stack development opportunities
              in startups as well as companies with scale.
            </p>
          </div>
        </div>

        <div className="about-scroll-tab">
          <button
            type="button"
            onClick={() => { navigate('/expertise'); setIsOpen(false); }}
            className="about-scroll-btn"
          >
            Expertise
            <i className="chevron down icon" />
          </button>
        </div>

      </div>
    </section>
  );
}

About.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default About;
