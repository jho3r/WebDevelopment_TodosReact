import React from "react";
import {CreateTopicButton} from '../CreateTopicButton/index';

function NewTodoTopic(props) {
  return (
    <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <CreateTopicButton 
          addTopic={props.addTopic}/>

    </div>
  );
}

export { NewTodoTopic };