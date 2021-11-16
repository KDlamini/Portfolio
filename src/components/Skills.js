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
    </>
  );
}

export default Skills;
