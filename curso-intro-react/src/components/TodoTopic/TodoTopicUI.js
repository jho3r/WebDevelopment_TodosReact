import React from "react";

import {TodoCounter} from '../TodoCounter/index';
import {TodoSearch} from '../TodoSearch/index';
import {TodoList} from '../TodoList/index';
import {TodoItem} from '../TodoItem/index';
import {CreateTodoButton} from '../CreateTodoButton/index';

function TodoTopicUI(
    {
        title,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        onTodoCompleted,
        onTodoDeleted,
        filteredTodos,
        titleEditable,
        onDoubleClick,
        onKeyDown,
    }
) {
    return (
        <div className="card">
                <h1 
                    className="card-title" 
                    onDoubleClick={onDoubleClick} 
                    contentEditable={titleEditable} 
                    onKeyDown={onKeyDown} >{title}</h1>
                <TodoCounter 
                    total={totalTodos}
                    completed={completedTodos} />
                <TodoSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
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
                <CreateTodoButton />

            </div>
    );
}

export { TodoTopicUI };