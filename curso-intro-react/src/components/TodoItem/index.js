import React from "react";
import './TodoItem.css';

function TodoItem (props) {
  

  return (
    <li className="list-group-item list-group-item-action">
      <input 
        className="form-check-input" 
        type="checkbox" 
        defaultChecked={props.completed}
        onClick={props.onTodoCompleted}/>
      <p className={`item-text ${props.completed && "todo-completed"}`}>{props.text}</p>
      <i 
        className="bi bi-trash3-fill item-delete-icon"
        onClick={props.onTodoDeleted} ></i>
    </li>
  );
}

export { TodoItem };