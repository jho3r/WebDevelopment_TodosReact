import React from "react";
import './TodoTopic.css';
import { TodoTopicUI } from './TodoTopicUI';

function TodoTopic(props) {
    const [todos, setTodos] = React.useState(props.todos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let filteredTodos = [];

    if (searchValue) {
        filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
        filteredTodos = todos;
    }
    
    const onTodoCompleted = (todo) => {
        const newTodos = todos.map(t => {
            if (t.id === todo.id) {
                t.completed = !t.completed;
            }
            return t;
        });
        setTodos(newTodos);
    }

    const onTodoDeleted = (todo) => {
        const newTodos = todos.filter(t => t.id !== todo.id);
        setTodos(newTodos);
    }

    return (
        <TodoTopicUI 
            title={props.title}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onTodoCompleted={onTodoCompleted}
            onTodoDeleted={onTodoDeleted}
            filteredTodos={filteredTodos}
        />
    );
}

export { TodoTopic };