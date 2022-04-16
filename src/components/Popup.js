import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../context/ModalContext';

function Popup() {
  const { modalIsOpen, setModalIsOpen, project } = useContext(ModalContext);

  const {
    name, description, live, code,
  } = project;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div className="modal-close">
        <button type="button" onClick={() => setModalIsOpen(false)}>Close</button>
      </div>
      <div className="modal-content">
        <h1>{name}</h1>
        <p>{description}</p>
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
    </Modal>
  );
}

export default Popup;
