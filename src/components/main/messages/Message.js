import React from 'react'

const Message = (props) => (
    <div>
        <h2>{props.sender} sent this:</h2>
        <p>{props.content}</p>
    </div>
)

export default Message