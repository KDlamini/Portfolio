import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../context/ModalContext';
import dotImg from '../assets/Counter.svg';

function Popup() {
  const { modalIsOpen, setModalIsOpen, project } = useContext(ModalContext);

  const {
    image, name, type, year, builtWith, tools, description, live, code,
  } = project;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <ul className="works-modal">
        <li>
          <div className="project-header">
            <div className="modal-title-container">
              <h1 className="project-title">{name}</h1>
              <div className="modal-close">
                <button
                  type="button"
                  onClick={() => setModalIsOpen(false)}
                >
                  <i className="times icon" />
                </button>
              </div>
            </div>
            <div className="project-info">
              <p>{type}</p>
              <img src={dotImg} alt="bullet point" />
              <p>{year}</p>
            </div>
          </div>
        </li>
        <li className="project-img-wrapper">
          <img className="project-img" src={image} alt="project" />
        </li>
        <li className="modal-body">
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
          <div className="divider" />
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
