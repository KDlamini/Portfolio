import React from 'react';
import '../styles/expertize/Expertise.css';

function Experience() {
  return (
    <>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="briefcase icon" />
            <span>January 2022 - Present</span>
            <h3>Technical Support Engineer</h3>
            <h4>Microverse Enterprise Inc. , Remote</h4>
            <p>
              {' '}
              •Provided technical support remotely to junior international
              web developers through code reviews.
              {' '}
              <br />
              • Proposed improvements to code organization to improve code
              quality and overall app performance.
              {' '}
              <br />
              • Provided suggestions on maintaining app development best practices,
              good documentation, high standards, and professionalism.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="briefcase icon" />
            <span>Sep 2021 - Oct 2021</span>
            <h3>Mentor (Volunteer)</h3>
            <h4>Microverse, Remote</h4>
            <p>
              {' '}
              • Mentored junior web developers by providing technical support
              remotely through platforms like Slack, WhatsApp and GitHub.
              {' '}
              <br />
              • Provided advice and tips on how to maintain motivation
              to sustain longevity in the program.
              {' '}
              <br />
              • Carried out weekly questionnaires to get statistics on student weekly progress.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="briefcase icon" />
            <span>Mar 2020 - Dec 2021</span>
            <h3>Self-Employed Developer</h3>
            <h4>NKOSI Imperial Digital Solutions, SA</h4>
            <p>
              {' '}
              • Interfaced with clients to identify business requirements for business proposals.
              {' '}
              <br />
              • Created an SPA website for DMH – Do My Hair Salon for product and services.
              {' '}
              <br />
              • Created ReactJS, Express.js, NodeJS and MongoDB web applications.
              {' '}
              <br />
              • Utilized Microsoft Suite and Google services like publishing, SEO,
              advertising and analytics.
              {' '}
              <br />
              • Designed flyers for DMH Salon, THE LOCAL BAR, and product designs for EDEN CHOICE
              oats, soya milk, Himalayan salt and granola.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
