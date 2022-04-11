import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {

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