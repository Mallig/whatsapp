import React from 'react'
import Message from './Message'

const MessageList = ({messages}) => (
    <div>
        {messages.map(message => {
            // TODO: SORT THIS OUT - WANT TO USE RANDOM NUMBER GENERATOR FOR KEY
            // NOT SURE HOW IMPORTANT THIS IS, BUT I DOUBT CONTENT AS A KEY IS A GOOD IDEA.
            return <Message key={message.content} content={message.content} sender={message.sender}/>
        })} 
    </div>
)

export default MessageList