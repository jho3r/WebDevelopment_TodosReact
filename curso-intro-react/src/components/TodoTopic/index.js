import React from "react";
import './TodoTopic.css';
import { TodoTopicUI } from './TodoTopicUI';

function TodoTopic(props) {
    const [todos, setTodos] = React.useState(props.todos);
    const [searchValue, setSearchValue] = React.useState('');
    const [title, setTitle] = React.useState(props.title);
    const [titleEditable, setTitleEditable] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let filteredTodos = [];

    if (searchValue) {
        filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
        filteredTodos = todos;
    }

    const saveTodos = (todos) => {
        setTodos(todos);
        props.saveTodos(todos);
    };

    const saveTitle = (title) => {
        setTitle(title);
        props.saveTitle(title);
    };
    
    const onTodoCompleted = (todo) => {
        const newTodos = todos.map(t => {
            if (t.id === todo.id) {
                t.completed = !t.completed;
            }
            return t;
        });
        saveTodos(newTodos);
    }

    const onTodoDeleted = (todo) => {
        const newTodos = todos.filter(t => t.id !== todo.id);
        saveTodos(newTodos);
    }

    const onDoubleClick = () => {
        setTitleEditable(true);
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTitleEditable(false);
            saveTitle(document.activeElement.innerText);
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