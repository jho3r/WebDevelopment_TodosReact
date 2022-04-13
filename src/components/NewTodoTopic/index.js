import React from "react";
import {CreateTopicButton} from '../CreateTopicButton/index';

function NewTodoTopic(props) {
  return (
    <section className="new-topic">
      {props.error && <p></p>}
      {props.loading && <p></p>}
      {(!props.error && !props.loading) && <div className="card">
          <h1 className="card-title">{props.title}</h1>
          <CreateTopicButton 
            addTopic={props.addTopic}/>

      </div>}
    </section>
  );
}

export { NewTodoTopic };