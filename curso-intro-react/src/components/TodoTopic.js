import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './TodoTopic.css';

function TodoTopic(props) {
  return (
    <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {props.todos.map(todo => (
                <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
            ))}
        </TodoList>
        <CreateTodoButton />

    </div>
  );
}

export { TodoTopic };