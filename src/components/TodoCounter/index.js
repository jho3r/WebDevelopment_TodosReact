import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos,}) {

  return (
    <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };