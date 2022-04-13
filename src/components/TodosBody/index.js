import React from "react";

function TodosBody(props) {

    return (
        <React.Fragment>
        {
        React.Children.toArray(props.children).map(child => {
            return React.cloneElement(child, {
                loading: props.loading,
                error: props.error,
            });
        })
        }
        </React.Fragment>
    );
}

export { TodosBody };