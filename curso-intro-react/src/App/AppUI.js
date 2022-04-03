import React from "react";
import { TodoTopic } from '../components/TodoTopic';
import { NewTodoTopic } from '../components/NewTodoTopic';

function AppUI({ topics, addTopic, saveTodos, saveTitle }) {
  return (
    <React.Fragment>
      {topics.map(topic => (
        <TodoTopic 
          key={topic.id} 
          title={topic.title} 
          todos={topic.todos} 
          saveTodos={(todos) => saveTodos(topic.id, todos)}
          saveTitle={(title) => saveTitle(topic.id, title)} />
      ))}
      <NewTodoTopic title="Nueva Lista" addTopic={addTopic} />
    </React.Fragment>
  );
}

export { AppUI };