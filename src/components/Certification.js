import React from 'react';
import APIsMicroservices from '../assets/APIs-and-Microservices.png';
import JavaScriptAlgorithmsAndDataStructures from '../assets/JavaScript-Algorithms-and-Data-Structures.png';
import FrontEndLibraries from '../assets/Front-End-Libraries.png';
import ResponsiveWebDesign from '../assets/Responsive-Web-Design.png';
import ReactImg from '../assets/React.png';
import JavaScriptImg from '../assets/JavaScript.png';
import HtmlCssImg from '../assets/Html-Css.png';
import RubyAndDatabases from '../assets/RubyAndDatabases.png';
import RubyOnRails from '../assets/RubyOnRails.png';
import FullStack from '../assets/FullStack.png';

function Certification() {
  return (
    <section className="timeline">
      <div className="certificate">
        <h2>Full Stack Web Development</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={FullStack} alt="Full stack web development" />
        </div>
      </div>

      <div className="certificate">
        <h2>Ruby on Rails</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={RubyOnRails} alt="Ruby on Rails" />
        </div>
      </div>

      <div className="certificate">
        <h2>Ruby and Databases</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={RubyAndDatabases} alt="Ruby" />
        </div>
      </div>

      <div className="certificate">
        <h2>React and Redux</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={ReactImg} alt="React" />
        </div>
      </div>

      <div className="certificate">
        <h2>JavaScript</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={JavaScriptImg} alt="JavaScript" />
        </div>
      </div>

      <div className="certificate">
        <h2>Html and CSS</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={HtmlCssImg} alt="Html and Css" />
        </div>
      </div>

      <div className="certificate">
        <h2>APIs and Microservices</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={APIsMicroservices} alt="APIs and Microservices" />
        </div>
      </div>

      <div className="certificate">
        <h2>Front End Libraries</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={FrontEndLibraries} alt="Front End Libraries" />
        </div>
      </div>

      <div className="certificate">
        <h2>JavaScript Algorithms and Data Structures</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={JavaScriptAlgorithmsAndDataStructures} alt="JavaScript Algorithms and Data Structures" />
        </div>
      </div>

      <div className="certificate">
        <h2>Responsive Design</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={ResponsiveWebDesign} alt="Responsive Design" />
        </div>
      </div>
    </section>
  );
}

export default Certification;
