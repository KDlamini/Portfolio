import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import ModalContext from '../context/ModalContext';
import dotImg from '../assets/Counter.svg';

function Popup() {
  const { modalIsOpen, setModalIsOpen, project } = useContext(ModalContext);

  const {
    image, imageUrls, name, type, year, builtWith, tools, contributors,
    tasks, description, requirements, live, code,
  } = project;

  const [imageSource, setImageSource] = useState(image);

  const { info, details } = requirements;

  const handleImageSource = (e) => {
    const url = e.target.src;

    setImageSource(url);
  };

  const styles = {
    overlay: {
      backgroundColor: '#7aacc0',
    },
    content: {
      top: '3px',
      left: '3px',
      right: '3px',
      bottom: '3px',
      border: 'none',
      background: '#d2deef',
      boxShadow: 'inset 2px 2px 4px #b3bdcb, inset -2px -2px 4px #f2ffff',
      borderRadius: '5px',
      outline: 'none',
      padding: '0 1rem 1rem 0',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={() => setModalIsOpen(false)}
      style={styles}
    >
      <ul className="projects-modal">
        <li>
          <div className="modal-close">
            <button
              type="button"
              onClick={() => setModalIsOpen(false)}
            >
              <i className="times icon" />
            </button>
          </div>
          <div className="project-header">
            <h1 className="project-name">{name}</h1>
            <div className="project-info">
              <p>{type}</p>
              <img src={dotImg} alt="bullet point" />
              <p>{year}</p>
            </div>
          </div>

          <div className="tools contributors">
            <p className="task-name">Contributors: </p>
            <ul className="tools-list">
              {
                contributors.map((contributor) => {
                  const { fullName, profile } = contributor;

                  return (
                    <li key={fullName}>
                      <a href={profile} target="_blank" rel="noopener noreferrer">{fullName}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </li>
        <li className="popup-image-wrapper">
          <div className="image-nav">
            {
              imageUrls.map((source) => (
                <button
                  key={source + (Math.floor(Math.random() * 10000) + 1)}
                  type="button"
                  className="image-nav-item"
                  onClick={(e) => handleImageSource(e)}
                >
                  <img className="project-img" src={source} alt="project" />
                </button>
              ))
            }
          </div>
          <div className="popup-image-container">
            <img className="project-img" src={imageSource} alt="project" />
          </div>
        </li>
        <li className="modal-body">
          <div className="tools-wrapper">
            <ul className="tools">
              <font>Built with: </font>
              <ul className="tools-list">
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
              <ul className="tools-list">
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
          <p className="modal-description">{description}</p>

          <div className="divider" />

          <div className="contributors">
            <p className="task-name">Project requirements: </p>
            <p>{info}</p>
            <ul>
              {
                details.map((requirement) => (
                  <li key={requirement}>
                    <p className="modal-description">{requirement}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="contributors">
            <p className="task-name">Tasks: </p>
            <ul>
              {
                tasks.map((role) => {
                  const { assignee, task } = role;

                  return (
                    <li key={assignee} className="task-item">
                      <p className="task-name">
                        {assignee}
                        :
                        &nbsp;
                      </p>
                      <span className="modal-description">{task}</span>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="actions">
            <button
              type="button"
              className="action-btn"
              onClick={() => window.open(`${live}`, '_blank')}
              disabled={name === 'Personal Portfolio'}
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
    </Modal>
  );
}

export default Popup;
