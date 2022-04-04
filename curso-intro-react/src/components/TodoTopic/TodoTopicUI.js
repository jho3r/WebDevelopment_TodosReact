import React from "react";

import {TodoCounter} from '../TodoCounter/index';
import {TodoSearch} from '../TodoSearch/index';
import {TodoList} from '../TodoList/index';
import {TodoItem} from '../TodoItem/index';
import {CreateTodoButton} from '../CreateTodoButton/index';
import { TopicTitle } from "../TopicTitle";
import {TodoContext} from '../../contexts/TodoContext';
import { Modal } from "../Modal";
import './TodoTopic.css';

function TodoTopicUI(){
    const {
        onTodoCompleted,
        onTodoDeleted,
        filteredTodos,
    } = React.useContext(TodoContext);

    return (
        <div className="card">
                <TopicTitle />
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {filteredTodos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            text={todo.text} 
                            completed={todo.completed}
                            onTodoCompleted={() => onTodoCompleted(todo)}
                            onTodoDeleted={() => onTodoDeleted(todo) } />
                    ))}
                </TodoList>

                <Modal modalTitle="Nueva tarea">
                    Hola mundo
                </Modal>

                <CreateTodoButton />

            </div>
    );
}

export { TodoTopicUI };