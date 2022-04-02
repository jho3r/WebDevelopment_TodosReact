import React from "react";
import {CreateTopicButton} from './CreateTopicButton';
import './TodoTopic.css';

function NewTodoTopic(props) {
  return (
    <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <CreateTopicButton />

    </div>
  );
}

export { NewTodoTopic };