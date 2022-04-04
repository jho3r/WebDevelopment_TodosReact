import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../../contexts/TodoContext';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
            type="text" 
            placeholder="Search"
            className="form-control todo-search"
            value={searchValue}
            onChange={onSearchChange} />
    )
}

export { TodoSearch };