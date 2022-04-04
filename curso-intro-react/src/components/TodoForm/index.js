import React from "react";
import './TodoForm.css';

function TodoForm(){
    return (
        <div className="mb-3 mt-3">
            <textarea 
                type="text" 
                className="form-control text-todoform" 
                name="newTodoText" 
                placeholder="Escribe una tarea" 
                autoFocus/>
        </div>
    );
}

export { TodoForm };