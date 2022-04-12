import React from "react";

function TopicList(props) {
  return (
    <section className="topic-list">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.error && !props.loading) && props.topics.map(topic => props.render(topic))}

    </section>
  )
}

export { TopicList };