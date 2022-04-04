import React from "react";
import { TodoTopicUI } from './TodoTopicUI';
import { TodoProvider } from '../../contexts/TodoContext';

function TodoTopic({ title, todos, saveTodos }) {
    
    return (
        <TodoProvider title={title} todos={todos} saveTodos={saveTodos} >
            <TodoTopicUI />
        </TodoProvider>
    );
}

export { TodoTopic };