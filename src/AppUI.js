import React from "react";
import { TodoTopic } from './components/TodoTopic';
import { NewTodoTopic } from './components/NewTodoTopic';
import { LoadingModal } from './components/LoadingModal';
import { TopicContext } from './contexts/TopicContext';
import { TopicList } from './components/TopicList';
import { ErrorTopic } from './components/ErrorTopic';
import { TodosBody } from './components/TodosBody';
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
    <TodosBody loading={loading} error={error} >
      <TopicList 
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
      
      <NewTodoTopic title="Nueva Lista" addTopic={addTopic} />
      
    </TodosBody>
  );
}

export { AppUI };