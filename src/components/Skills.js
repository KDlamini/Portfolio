import React from 'react';
import languages from './data';

function Skills() {
  return (
    <>
      <ul className="programming-languages">
        { languages.map((language) => {
          const { id, name, icon } = language;

          return (
            <li key={id} className="language">
              <i className={`${icon} icon`} />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>

      <div className="skill-item-wrapper">
        { languages.map((language) => {
          const { id, name, level } = language;

          return (
            <div key={id} className="skill-item">
              <div className="skill-name">
                <p>{name}</p>
                <p>{level}</p>
              </div>
              <div className="progress-bar">
                <div className="progress-level" style={{ width: level }} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
