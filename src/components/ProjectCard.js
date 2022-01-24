import React from 'react';
import PropTypes from 'prop-types';
import dotImg from '../assets/Counter.svg';

function ProjectCard({ props }) {
  const {
    image, name, type, year, builtWith, tools, description, live, code,
  } = props;

  return (
    <ul className="project-card">
      <li className="project-img-wrapper">
        <img className="project-img" src={image} alt="project" />
      </li>

      <li className="project-content">
        <div className="project-header">
          <h1 className="project-name">{name}</h1>
          <div className="project-info">
            <p>{type}</p>
            <img src={dotImg} alt="bullet point" />
            <p>{year}</p>
          </div>
        </div>

        <div className="tools-wrapper">
          <ul className="tools">
            <font>Built with: </font>
            <ul>
              {
                builtWith.map((tool) => (
                  <li key={tool}>
                    {tool}
                    ,
                  </li>
                ))
              }
            </ul>
          </ul>

          <ul className="tools">
            <font>Additional Tools: </font>
            <ul>
              {
                tools.map((tool) => (
                  <li key={tool}>
                    {tool}
                    ,
                  </li>
                ))
              }
            </ul>
          </ul>
        </div>

        <p className="description">{description}</p>

        <div className="actions">
          <button
            type="button"
            className="action-btn"
            onClick={() => window.open(`${live}`, '_blank')}
          >
            <i className="globe icon" />
          </button>

          <button
            type="button"
            className="action-btn"
            onClick={() => window.open(`${code}`, '_blank')}
          >
            <i className="code icon" />
          </button>
        </div>
      </li>
    </ul>
  );
}

ProjectCard.propTypes = {
  props: PropTypes.object,
}.isRequired;

export default ProjectCard;
