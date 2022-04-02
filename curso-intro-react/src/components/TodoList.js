import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="list-group">
        {props.children}
    </section>
  );
}

export { TodoList };