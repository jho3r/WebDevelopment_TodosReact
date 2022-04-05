import React from "react";

function TopicHeader({children}) {
    return (
        <header className="card-header">
        {children}
        </header>
    );
}

export { TopicHeader };