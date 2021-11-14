/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about-banner">
        <a href="#skillstab">
          <div className="about-scroll-btn">
            <i className="caret down icon" />
          </div>
        </a>

        <div className="about-profile">
          <img alt="Simo Nkosi" src="./public/images/profile1.jpg" className="about-img" />
        </div>
        <div className="about-text">
          <h1>About me</h1>
          <h2>Full-Stack Web Developer</h2>
          <p>
            I specialize in JavaScript, React, NodeJS, Express, Mongoose/MongoDB, Ruby,
            Ruby-on-Rails and many more exciting technologies.
          </p>
          <p>
            At Microverse, I have gained the experience to work remotely and
            collaboratively in teams through pair programming.
            Extensive soft skills include time management, handling expectations,
            great communication skills with fluency in English, critical thinking,
            problem-solving skills, working under pressure, and adapting to
            new technical skills in a short period of time.
          </p>
        </div>

        <div className=" arrow-line" />

        <div className=" social">
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
      </div>
    </section>
  );
}

export default About;
