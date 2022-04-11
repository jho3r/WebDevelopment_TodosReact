import React from "react";
import { useLocalStorage } from "../../custom/useLocalStorage";

const TopicContext = React.createContext();

function TopicProvider(props){

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
        <TopicContext.Provider value={{
            topics,
            addTopic,
            saveTodos,
            loading,
        }}>
            {props.children}
        </TopicContext.Provider>
    );
}

export { TopicProvider, TopicContext };