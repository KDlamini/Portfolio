import React from 'react';
import languages from './data';

function Skills() {
  return (
    <>
      <div className="programming-languages">
        { languages.map((language) => {
          const { id, name, icon } = language;

          return (
            <div key={id} className="language">
              <i className={`${icon} icon`} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>

      <div className="skill-item-wrapper">
        { languages.map((language) => {
          const { id, name, level } = language;

          return (
            <div key={id} className="skill-item">
              <p>
                {name}
                {' '}
                <span>{level}</span>
              </p>
              <div className="progress-bar" style={{ width: 'calc(50% - 10px)' }}>
                <div className="html-skill" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
