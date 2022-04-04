// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './contexts/TopicContext';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
