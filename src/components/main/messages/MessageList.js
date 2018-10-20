import React from 'react'
import Message from './Message'

const MessageList = (props) => (
    <div>
        {props.messages.map(message => {
            return <Message content={message.content} sender={message.sender}/>
        })} 
    </div>
)

export default MessageList