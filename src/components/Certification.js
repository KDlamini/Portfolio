import React from 'react';
import APIsMicroservices from '../assets/APIs-and-Microservices.png';
import JavaScriptAlgorithmsAndDataStructures from '../assets/JavaScript-Algorithms-and-Data-Structures.png';
import FrontEndLibraries from '../assets/Front-End-Libraries.png';
import ResponsiveWebDesign from '../assets/Responsive-Web-Design.png';

function Certification() {
  return (
    <section className="timeline">
      <div className="certificate">
        <h2>APIs and Microservices</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={APIsMicroservices} alt="Responsive Design" />
        </div>
      </div>

      <div className="certificate">
        <h2>JavaScript Algorithms and Data Structures</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={JavaScriptAlgorithmsAndDataStructures} alt="Responsive Design" />
        </div>
      </div>

      <div className="certificate">
        <h2>Front End Libraries</h2>
        <div className="certificate-wrapper">
          <img className="certificate-img" src={FrontEndLibraries} alt="Responsive Design" />
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
