// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TopicProvider } from './contexts/TopicContext';


function App() {
  return (
    <TopicProvider>
      <AppUI />
    </TopicProvider>
  );
}

export default App;
