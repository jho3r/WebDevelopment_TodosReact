import React from "react";
import './TodoList.css';

function TodoList(props) {
  const renderFunction = props.children || props.render;
  return (
    <section className="list-group">
        {!props.totalTodos && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearch(props.searchValue)}
        {props.filteredTodos.map(todo => renderFunction(todo))}
    </section>
  );
}

export { TodoList };