import React, { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../context/ModalContext';

function Popup() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div className="modal-close">
        <button type="button" onClick={() => setModalIsOpen(false)}>Close</button>
      </div>
      <div className="modal-content">
        <h1>Heading</h1>
        <p>Description textarea</p>
      </div>
    </Modal>
  );
}

export default Popup;
