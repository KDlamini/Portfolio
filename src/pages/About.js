/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import aboutImg from '../assets/about-pic.jpg';
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
          <a id="facebook-btn" href="https://www.facebook.com/wilson.dlamean" target="_blank" rel="noreferrer">
            <i className="facebook f icon" />
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
              At Microverse, I have gained the experience to work remotely and
              collaboratively in teams through pair programming.
              My soft skills include time management, handling expectations,
              great communication skills with fluency in English, critical thinking,
              problem-solving skills, working under pressure, and adapting to
              new technical skills in a short period of time.
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
