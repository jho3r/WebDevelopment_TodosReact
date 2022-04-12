import React from "react";

import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TopicTitle } from "../TopicTitle";
import { useTodos } from '../../custom/useTodos';
import { NewTodoModal } from "../NewTodoModal";
import { TodoForm } from "../TodoForm";
import { TopicHeader } from "../TopicHeader";
import './TodoTopic.css';

function TodoTopic({ title:titleTopic, todos, saveTodos }) {
    
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
        setSearchValue,
        setOpenModal,
        openModal,
        onTodoAdded,
    } = useTodos(titleTopic, todos, saveTodos);

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
            <TodoList
                totalTodos={totalTodos}
                filteredTodos={filteredTodos}
                searchValue={searchValue}
                onEmptyTodos={() => <p className="text-center">No hay tareas</p>}
                onEmptySearch={(searchVal) => <p className="text-center">No hay resultados para {searchVal}</p>}
                // render={todo => (
                //     <TodoItem 
                //         key={todo.id}
                //         text={todo.text} 
                //         completed={todo.completed}
                //         onTodoCompleted={() => onTodoCompleted(todo)}
                //         onTodoDeleted={() => onTodoDeleted(todo) } />
                // )}
            >
                {todo => (
                    <TodoItem 
                        key={todo.id}
                        text={todo.text} 
                        completed={todo.completed}
                        onTodoCompleted={() => onTodoCompleted(todo)}
                        onTodoDeleted={() => onTodoDeleted(todo) } />
                )}
            </TodoList>

            <NewTodoModal 
                modalTitle="Nueva tarea"
                openModal={openModal}
                setOpenModal={setOpenModal}
                onTodoAdded={onTodoAdded} >
                
                <TodoForm />

            </NewTodoModal>

            <CreateTodoButton setOpenModal={setOpenModal} />

        </div>
    );
}

export { TodoTopic };