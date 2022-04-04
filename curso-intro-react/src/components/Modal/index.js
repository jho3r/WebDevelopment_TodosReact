import ReactDOM from 'react-dom';
import React from 'react';
import {default as BModal} from 'react-bootstrap/Modal';
import { TodoContext } from '../../contexts/TodoContext';

const modalElement = document.getElementById('modal');

function Modal(props) {

  const {
      openModal,
      setOpenModal,
      onTodoAdded,
  } = React.useContext(TodoContext);

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleSubmit = (e) => {
    onTodoAdded(e.target.newTodoText.value);
    e.preventDefault();
    setOpenModal(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onTodoAdded(e.target.value);
      e.preventDefault();
      setOpenModal(false);
    }
  }

  return ReactDOM.createPortal(
    <BModal show={openModal} onHide={handleClose}>
      <BModal.Header closeButton>
        <BModal.Title>{props.modalTitle}</BModal.Title>
      </BModal.Header>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <BModal.Body>
          {props.children}
        </BModal.Body>
        <BModal.Footer>
          <button type='button' className="btn btn-secondary" onClick={handleClose}>
            Cancelar
          </button>
          <button className="btn btn-warning" type='submit'>
            Guardar
          </button>
        </BModal.Footer>
      </form>
    </BModal>,
    modalElement
  );
}

export { Modal };