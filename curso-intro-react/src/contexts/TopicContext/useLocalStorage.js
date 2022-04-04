import React from "react";

const defaultTopics = [
    { id: 1, title: 'Bienvenido', todos: [
      { id: 1, text: 'Crea nuevos todos con el (+)', completed: false },
      { id: 2, text: '<-- marca un todo completado', completed: false },
      { id: 3, text: 'Eimina un todo -->', completed: false },
      { id: 4, text: 'Busca un todo en el buscador ^', completed: false },
      { id: 5, text: 'Edita el titulo con doble click', completed: false },
      { id: 6, text: 'Guarda los cambios en el titulo con Enter', completed: false },
      { id: 7, text: 'Crea nuevas listas con el [+]', completed: false },
    ] },
  ];
  
function useLocalStorage(itemName, initialValue) {
  
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
  
  
    React.useEffect(() => {    
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];
  
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          parsedItem = defaultTopics;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }
  
        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    }, [itemName]);
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    };
  
    return {item, 
            saveItem,
            loading};
}

export { useLocalStorage };