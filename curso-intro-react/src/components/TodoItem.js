import React from "react";
import './TodoItem.css';

function TodoItem (props) {
  let slicedText;
  if (props.text.length > 30) {
    slicedText = props.text.slice(0, 30) + '...';
  } else {
    slicedText = props.text;
  }
  return (
    <li className="list-group-item list-group-item-action">
      <input className="form-check-input" type="checkbox" defaultChecked={props.completed}/>
      <p className="item-text">{slicedText}</p>
      <i class="bi bi-trash3-fill item-delete-icon"></i>
    </li>
  );
}

export { TodoItem };