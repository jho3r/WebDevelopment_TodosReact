import React from "react";
import './ErrorTopic.css';

function ErrorTopic(props) {
  return (
    <section className="topic-error">
        <div>
            <h2>Ha ocurrido un error al cargar la informacion</h2>
            <h5>Por favor, recargue la pagina</h5>
        </div>
        
    </section>
  );
}

export { ErrorTopic };