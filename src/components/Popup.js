import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../context/ModalContext';
import dotImg from '../assets/Counter.svg';

function Popup() {
  const { modalIsOpen, setModalIsOpen, project } = useContext(ModalContext);

  const {
    image, name, type, year, builtWith, tools, description, live, code,
  } = project;

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
      padding: '1rem',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={() => setModalIsOpen(false)}
      style={styles}
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
