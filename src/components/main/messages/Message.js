import React from 'react'

const Message = ({sender, content}) => (
    <div id='message'>
        <h3>{sender} sent this:</h3>
        <p>{content}</p>
    </div>
)

export default Message