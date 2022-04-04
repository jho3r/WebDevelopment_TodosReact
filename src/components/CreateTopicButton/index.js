import React from "react";
import './CreateTopicButton.css';

function CreateTopicButton(props) {
  return (
    <div className="new-topic-button-container">
      <button onClick={props.addTopic} className= "btn btn-warning create-topic-button">
        <i className="bi bi-plus create-topic-button-icon"></i>
      </button>
    </div>
    
  );
}

export { CreateTopicButton };