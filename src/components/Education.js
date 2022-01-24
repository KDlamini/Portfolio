import React from 'react';
import '../styles/expertize/Expertise.css';

function Education() {
  return (
    <>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="graduation cap icon" />
            <span>May, 2021 - Jan, 2022</span>
            <h3>Full-Stack Web Development</h3>
            <h4>Microverse, CA</h4>
            <p>
              {' '}
              ▪ Html5, CSS, JavaScript
              <br />
              ▪ ReactJS, Redux &gt; Hooks and Context APIs
              <br />
              ▪ Ruby and Ruby-on-Rails
              <br />
              ▪ Data Structures and Algorithms
              <br />
              ▪ Databases
              <br />
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="graduation cap icon" />
            <span>Apr, 2018 - Mar, 2021</span>
            <h3>Full-Stack Web Development</h3>
            <h4>FreeCodeCamp, CA</h4>
            <p>
              {' '}
              ▪ Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)
              {' '}
              <br />
              ▪ Front End Libraries (React, Redux, Sass, Bootstrap,
              jQuery)
              {' '}
              <br />
              ▪ JavaScript Algorithms and Data Structures (JavaScript)
              {' '}
              <br />
              ▪ Back-End and APIs (Node.js, Express.js, MongoDB)
              {' '}
              <br />
              ▪ Information Security and Quality
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="graduation cap icon" />
            <span>Jan, 2010 - Nov, 2012</span>
            <h3>National Senior Certificate</h3>
            <h4>Mathews Phosa College, Nelspruit</h4>
            <p>
              {' '}
              ▪ Information Technology (ICT)
              <br />
              ▪ Advanced Mathematics
              {' '}
              <br />
              ▪ Physics and Chemistry
              {' '}
              <br />
              ▪ English Literature
              {' '}
              <br />
              ▪ Biology
              {' '}
              <br />
              ▪ Life Orientation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
