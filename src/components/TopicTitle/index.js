import React from "react";
import './TopicTitle.css';

function TopicTitle({
    title,
    titleEditable,
    onDoubleClick,
    onKeyDown,
}) {
    
    return (
        <h1 
        className="card-title" 
        onDoubleClick={onDoubleClick} 
        contentEditable={titleEditable} 
        onKeyDown={onKeyDown} >{title}</h1>
    )
}

export { TopicTitle };