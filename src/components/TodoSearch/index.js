import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

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