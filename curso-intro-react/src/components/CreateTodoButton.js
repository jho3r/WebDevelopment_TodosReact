import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <div className="button-container">
      <button onClick={props.onClick} className= "btn btn-warning create-todo-button">
        <i class="bi bi-plus create-todo-button-icon"></i>
      </button>
    </div>
    
  );
}

export { CreateTodoButton };