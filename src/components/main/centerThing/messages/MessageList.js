import React from 'react'

import Message from './Message'
import ListWrapper from '../../ListWrapper'

const MessageList = ({messages}) => (
    <ListWrapper inputHeight="60vh">
        {messages.map(message => {
            // TODO: SORT THIS OUT - WANT TO USE RANDOM NUMBER GENERATOR FOR KEY
            // NOT SURE HOW IMPORTANT THIS IS, BUT I DOUBT CONTENT AS A KEY IS A GOOD IDEA.
            // ONCE MESSAGES ARE STORED IN A DATABASE, USE THE ID AS KEY VALUE
            return <Message key={message.content} content={message.content} sender={message.sender}/>
        })} 
    </ListWrapper>
)

export default MessageList
