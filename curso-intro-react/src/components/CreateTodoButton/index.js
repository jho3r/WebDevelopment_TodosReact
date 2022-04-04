import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from '../../contexts/TodoContext';

function CreateTodoButton(props) {

  const { setOpenModal } = React.useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(true);
  }

  return (
    <div className="button-container">
      <button onClick={handleClick} className= "btn btn-warning create-todo-button">
        <i className="bi bi-plus create-todo-button-icon"></i>
      </button>
    </div>
    
  );
}

export { CreateTodoButton };