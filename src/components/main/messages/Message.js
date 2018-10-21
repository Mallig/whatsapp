import React from 'react'

const Message = ({sender, content}) => (
    <div id='message'>
        <h2>{sender} sent this:</h2>
        <p>{content}</p>
    </div>
)

export default Message