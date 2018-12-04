import React from 'react'

import MessageWrapper from "./MessageWrapper"
import MessageSender from "./MessageSender"
import MessageContent from "./MessageContent"

var currentUser = "Mal"

const Message = ({sender, content}) => (
    <MessageWrapper sentByUser={(sender === currentUser)}>
        <MessageSender>{sender}:</MessageSender>
        <MessageContent>"{content}"</MessageContent>
    </MessageWrapper>
)

export default Message
