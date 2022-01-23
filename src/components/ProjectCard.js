import React from 'react';
import moviecon from '../assets/marvel-moviecon.png';
import dotImg from '../assets/Counter.svg';

function ProjectCard() {
  return (
    <ul className="project-card">
      <li className="project-img-wrapper">
        <img className="project-img" src={moviecon} alt="project" />
      </li>

      <li className="project-content">
        <div className="project-header">
          <h1 className="project-name">Coinvest Bank</h1>
          <div className="project-info">
            <p className="project-info-item">Front End</p>
            <img src={dotImg} alt="bullet point" />
            <p className="project-info-item">2021</p>
          </div>
        </div>

        <ul className="tools">
          <font>Tools: </font>
          <ul>
            <li>React</li>
            <li>Hooks</li>
            <li>Router</li>
          </ul>
        </ul>

        <p className="description">
          Coinvest Bank is a fictional bank resembling a real world bank design and functionality.
          <br />
          • I applied React hooks, BrowswerRouter, Route, Switch and Link using react-router-dom.
          <br />
          • Commercially focused responsive design.
          <br />
          • Semantic UI icons.
        </p>

        <div className="actions">
          <button
            type="button"
            className="action-btn"
            onClick={() => window.open('https://coinvestbank.netlify.app/', '_blank')}
          >
            <i className="globe icon" />
          </button>
          <button
            type="button"
            className="action-btn"
            onClick={() => window.open('https://github.com/KDlamini/coinvest-bank', '_blank')}
          >
            <i className="code icon" />
          </button>
        </div>
      </li>
    </ul>
  );
}

export default ProjectCard;
