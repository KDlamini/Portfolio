import React from 'react';

function Experience() {
  return (
    <>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="briefcase icon" />
            <span>Mar, 2020 - Dec 2021</span>
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
              • Microsoft Suite and Google services like publishing, SEO, advertising and analytics.
              {' '}
              <br />
              • Designed flyers for DMH Salon, THE LOCAL BAR, and product designs for EDEN CHOICE
              oats, soya milk, Himalayan salt and granola.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-inner">
            <i className="briefcase icon" />
            <span>Apr, 2018 - Feb, 2020</span>
            <h3>Service Ambassador</h3>
            <h4>CasaBella Woodlands, Pretoria</h4>
            <p>
              {' '}
              • Demonstrated genuine hospitality while greeting and establishing
              rapport with guests.
              {' '}
              <br />
              • Maintained high standards of cleanliness and sanitation.
              {' '}
              <br />
              • Described menu items, special offerings, and appropriately identified wine pairings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
