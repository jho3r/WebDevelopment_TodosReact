import React from "react";
import { TodoTopic } from './components/TodoTopic';
import { NewTodoTopic } from './components/NewTodoTopic';
import { LoadingModal } from './components/LoadingModal';
import { TopicContext } from './contexts/TopicContext';
import { TopicList } from './components/TopicList';
import { ErrorTopic } from './components/ErrorTopic';
import './App.css';

function AppUI() {

  const {
    topics,
    addTopic,
    saveTodos,
    loading,
    error,
  } = React.useContext(TopicContext);
  
  return (
    <React.Fragment>
      <TopicList 
        loading = {loading}
        error = {error}
        topics = {topics}
        onLoading = {() => <LoadingModal /> }
        onError = {() => <ErrorTopic /> }
        render = {topic => (
                    <TodoTopic 
                      key={topic.id} 
                      title={topic.title} 
                      todos={topic.todos} 
                      saveTodos={(title, todos) => saveTodos(topic.id, title, todos)} />
                  )}
      />
      
      <NewTodoTopic title="Nueva Lista" addTopic={addTopic} error={error} />
      
    </React.Fragment>
  );
}

export { AppUI };