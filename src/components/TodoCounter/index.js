import React from "react";
import './TodoCounter.css';
import {TodoContext} from '../../contexts/TodoContext';

function TodoCounter() {

  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext);

  return (
    <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };