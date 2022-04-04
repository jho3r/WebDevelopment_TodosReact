import React from "react";
import { TodoTopic } from './components/TodoTopic';
import { NewTodoTopic } from './components/NewTodoTopic';
import { LoadingModal } from './components/LoadingModal';
import { TopicContext } from './contexts/TopicContext';
import './App.css';

function AppUI() {

  const {
    topics,
    addTopic,
    saveTodos,
    loading,
  } = React.useContext(TopicContext);

  return (
    <React.Fragment>
      {topics.map(topic => (
        <TodoTopic 
          key={topic.id} 
          title={topic.title} 
          todos={topic.todos} 
          saveTodos={(title, todos) => saveTodos(topic.id, title, todos)} />
      ))}
      <NewTodoTopic title="Nueva Lista" addTopic={addTopic} />
      <LoadingModal loading={loading} />
    </React.Fragment>
  );
}

export { AppUI };