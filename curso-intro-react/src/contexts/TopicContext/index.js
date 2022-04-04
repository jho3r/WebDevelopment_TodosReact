import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {item:topics, saveItem:saveTopics, loading} = useLocalStorage('topics_v1', []);

    const saveTodos = (id, title, todos) => {
        const newTopics = topics.map(topic => {
        if (topic.id === id) {
            topic.todos = todos;
            topic.title = title;
        }
        return topic;
        });
        saveTopics(newTopics);
    };

    const addTopic = () => {
        console.log('addTopic');
        const newTopic = {
        id: topics.length + 1,
        title: 'Doble click para editar',
        todos: [],
        };
        const newTopics = [...topics, newTopic];
        saveTopics(newTopics);
    };

    return (
        <TodoContext.Provider value={{
            topics,
            addTopic,
            saveTodos,
            loading,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };