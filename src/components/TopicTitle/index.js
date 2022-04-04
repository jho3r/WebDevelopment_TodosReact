import React from "react";
import { TodoContext } from "../../contexts/TodoContext";
import './TopicTitle.css';

function TopicTitle() {

    const {
        title,
        titleEditable,
        onDoubleClick,
        onKeyDown,
    } = React.useContext(TodoContext);

    return (
        <h1 
        className="card-title" 
        onDoubleClick={onDoubleClick} 
        contentEditable={titleEditable} 
        onKeyDown={onKeyDown} >{title}</h1>
    )
}

export { TopicTitle };