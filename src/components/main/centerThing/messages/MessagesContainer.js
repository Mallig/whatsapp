import React from 'react'
import MessageList from './MessageList'
import {messages} from '../../../../resources/Jon'

// TODO fetch actual messages
const fetchMessages = (interlocutor) => messages

export const MessagesContainer = ({interlocutor}) =>
    <div id='content'>
        <MessageList messages={fetchMessages(interlocutor)}/>
    </div>
