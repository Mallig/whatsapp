import React from 'react'

import Message from './Message'
import ListWrapper from '../../ListWrapper'

const MessageList = ({ messages }) => {
    return <ListWrapper inputHeight="60vh">
        {(messages !== undefined) ?
            messages.map(message => {
                return <Message key={message.id} content={message.content} sender_id={message.sender_id}/>
            }) : null
        }
    </ListWrapper>
}

export default MessageList
