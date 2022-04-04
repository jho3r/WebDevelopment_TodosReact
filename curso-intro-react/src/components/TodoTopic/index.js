import React from "react";
import './TodoTopic.css';
import { TodoTopicUI } from './TodoTopicUI';

function TodoTopic({ title, todos, saveTodos }) {
    
    const [searchValue, setSearchValue] = React.useState('');
    const [titleEditable, setTitleEditable] = React.useState(false);

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
        saveTodos(title,newTodos);
    }

    const onTodoDeleted = (todo) => {
        const newTodos = todos.filter(t => t.id !== todo.id);
        saveTodos(title,newTodos);
    }

    const onDoubleClick = () => {
        setTitleEditable(true);
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTitleEditable(false);
            saveTodos(document.activeElement.innerText, todos);
        }
    }

    return (
        <TodoTopicUI 
            title={title}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onTodoCompleted={onTodoCompleted}
            onTodoDeleted={onTodoDeleted}
            filteredTodos={filteredTodos}
            titleEditable={titleEditable}
            onDoubleClick={onDoubleClick}
            onKeyDown={onKeyDown}
        />
    );
}

export { TodoTopic };