// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const topicsDefault = [
  { id: 1, title: 'Bienvenido', todos: [
    { id: 1, text: 'Crea nuevos todos con el (+)', completed: false },
    { id: 2, text: '<-- marca un todo completado', completed: false },
    { id: 3, text: 'Eimina un todo -->', completed: false },
    { id: 4, text: 'Expande el todo haciendo click', completed: false },
    { id: 5, text: 'Busca un todo en el buscador ^', completed: false },
    { id: 6, text: 'Edita el titulo con doble click', completed: false },
    { id: 7, text: 'Guarda los cambios con Enter', completed: false },
    { id: 8, text: 'Crea nuevas listas con el [+]', completed: false },
  ] },
];

function App() {

  const localStorageTopics = localStorage.getItem('topics_v1');
  let parsedTopics = [];

  if (localStorageTopics) {
    parsedTopics = JSON.parse(localStorageTopics);
  } else {
    parsedTopics = topicsDefault;
    localStorage.setItem('topics_v1', JSON.stringify(topicsDefault));
  }

  const [topics, setTopics] = React.useState(parsedTopics);

  const addTopic = () => {
    console.log('addTopic');
    const newTopic = {
      id: topics.length + 1,
      title: 'Doble click para editar',
      todos: [],
    };
    setTopics([...topics, newTopic]);
    const newTopics = [...topics, newTopic];
    localStorage.setItem('topics_v1', JSON.stringify(newTopics));
  };

  const saveTodos = (id,todos) => {
    console.log(id, todos);
    const newTopics = topics.map(topic => {
      if (topic.id === id) {
        topic.todos = todos;
      }
      return topic;
    });
    localStorage.setItem('topics_v1', JSON.stringify(newTopics));
  };

  const saveTitle = (id,title) => {
    console.log(id, title);
    const newTopics = topics.map(topic => {
      if (topic.id === id) {
        topic.title = title;
      }
      return topic;
    });
    localStorage.setItem('topics_v1', JSON.stringify(newTopics));
  };

  return (
    <AppUI 
      topics={ topics }
      addTopic={ addTopic }
      saveTodos={ saveTodos }
      saveTitle={ saveTitle } />
  );
}

export default App;
