import React from "react";

import {TodoCounter} from '../TodoCounter/index';
import {TodoSearch} from '../TodoSearch/index';
import {TodoList} from '../TodoList/index';
import {TodoItem} from '../TodoItem/index';
import {CreateTodoButton} from '../CreateTodoButton/index';
import { TopicTitle } from "../TopicTitle";
import {TodoContext} from '../../contexts/TodoContext';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TopicHeader } from "../TopicHeader";
import './TodoTopic.css';

function TodoTopicUI(){
    const {
        onTodoCompleted,
        onTodoDeleted,
        filteredTodos,
        title,
        titleEditable,
        onDoubleClick,
        onKeyDown,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className="card">
            <TopicHeader>
                <TopicTitle 
                    title={title} 
                    titleEditable={titleEditable} 
                    onDoubleClick={onDoubleClick} 
                    onKeyDown={onKeyDown} />
                <TodoCounter 
                    totalTodos={totalTodos}
                    completedTodos={completedTodos} />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
            </TopicHeader>
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
                <TodoForm />
            </Modal>

            <CreateTodoButton />

        </div>
    );
}

export { TodoTopicUI };