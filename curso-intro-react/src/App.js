// import './App.css';
import React from 'react';

import { TodoTopic } from './components/TodoTopic';
import { NewTodoTopic } from './components/NewTodoTopic';

const topics = [
  { id: 1, title: 'React', todos: [
    { id: 1, text: 'Learn Reactsdfsdfsdfsdfsdfsdfsdfdf', completed: true },
    { id: 2, text: 'Learn Redux', completed: true },
    { id: 3, text: 'Learn GraphQL', completed: false },
  ] },
  { id: 2, title: 'Redux', todos: [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Redux', completed: false },
    { id: 3, text: 'Learn GraphQL', completed: false },
  ] },
  { id: 3, title: 'GraphQL', todos: [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Redux', completed: false },
    { id: 3, text: 'Learn GraphQL', completed: false },
  ] },
];

function App() {

  return (
    <React.Fragment>
      {topics.map(topic => (
        <TodoTopic key={topic.id} title={topic.title} todos={topic.todos} />
      ))}
      <NewTodoTopic title="Nueva Lista"/>
    </React.Fragment>
  );
}

export default App;
