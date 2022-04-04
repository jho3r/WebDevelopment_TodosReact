import ReactDOM from 'react-dom';
import React from 'react';
import {default as BModal} from 'react-bootstrap/Modal';
import { TodoContext } from '../../contexts/TodoContext';

const modalElement = document.getElementById('modal');

function Modal(props) {

  const {
      openModal,
      setOpenModal,
  } = React.useContext(TodoContext);

  const handleClose = () => {
    setOpenModal(false);
  }

  return ReactDOM.createPortal(
    <BModal show={openModal} onHide={handleClose}>
      <BModal.Header closeButton>
        <BModal.Title>{props.modalTitle}</BModal.Title>
      </BModal.Header>
      <BModal.Body>
        {props.children}
      </BModal.Body>
      <BModal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-warning" onClick={handleClose}>
            Save Changes
          </button>
        </BModal.Footer>
    </BModal>,
    modalElement
  );
}

export { Modal };