/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../styles/contact/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="phone-tab contact-tab">
            <a href="tel:+27 67 0980 127"><i className="phone icon" /></a>
            <h4>Phone</h4>
            <p>+27 67 0980 127</p>
          </div>
          <div className="email-tab contact-tab">
            <a href="mailto: simosakhenkosi@gmail.com"><i className="envelope icon" /></a>
            <h4>Email</h4>
            <p>simosakhenkosi@gmail.com</p>
          </div>
          <div className="address-tab contact-tab">
            <a href="https://www.google.com/maps/place/17+Roux+St,+The+Reeds,+Centurion,+0061/@-25.895956,28.1248053,17z/data=!3m1!4b1!4m5!3m4!1s0x1e956539086d5e89:0xcd16eec19f21ae48!8m2!3d-25.895956!4d28.126994" target="_blank" rel="noreferrer">
              <i className="map marker alternate icon" />
            </a>
            <h4>Address</h4>
            <p>
              17 Roux, The Reeds,
              {' '}
              <br />
              {' '}
              Centurion
            </p>
          </div>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <div className="form-left">
            <h1 className="form-heading">
              <font style={{ borderBottom: '3px solid #1ED98B' }}>Writ</font>
              e me
            </h1>
            <div className="f-name">
              <font>Name</font>
              <input type="text" name="name" placeholder="Full Name" />
            </div>
            <div className="f-email">
              <font>Email</font>
              <input type="email" name="email" placeholder="Example@gmail.com" />
            </div>
          </div>

          <div className="form-right">
            <div className="message">
              <font>Message</font>
              <textarea name="message" rows="5" cols="20" placeholder="Write Message..." />
            </div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
