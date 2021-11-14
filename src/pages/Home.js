import React from 'react';
import '../styles/homepage/Home.css';

function Home() {
  return (
    <section className="homepage">
      <div className="banner">
        <div className="banner-content">
          <div className="introduction">
            <p>Hi there!,</p>
            <h1>
              I&apos;m
              {' '}
              <font color="#ff3773">Simo</font>
              {' '}
              Nkosi
            </h1>
            <p className="details">
              I’m a software developer!
              I a strong passion for digital innovation. I can help you build interactive web
              applications. Look through some of my work and experience!
              If you like what you see and have a project you need coded,
              don’t hesitate to contact me. I am very excited to work with you.
            </p>
          </div>
          <div className="banner-actions">
            <a href="../assets/Simosakhe Dlamini Resume.pdf" target="_blank">
              <button type="button" className="cv-btn">Download Cv</button>
            </a>
          </div>
        </div>
        <div className="profile">
          <div className="profile-image">
            <img className=" profile-img" src="../assets/profile.jpg" alt="Simo Nkosi" />
          </div>
        </div>

        <div className="effect-wrap">
          <div className="effect effect-1" />
          <div className="effect effect-2">
            <div />
          </div>
          <div className="effect effect-3">
            <div className="effect-3-0">
              <div className="effect-3-1" />
            </div>
          </div>
          <div className="effect effect-4" />
          <div className="effect effect-4-0" />
          <div className="effect effect-5" />
        </div>
      </div>
    </section>
  );
}

export default Home;
