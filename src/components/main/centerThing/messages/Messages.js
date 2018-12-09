import React from 'react'
import MessageList from './MessageList'

const Messages = (props) =>
    <div id='content'>
        <MessageList interlocutor={props.interlocutor}/>
    </div>

export default Messages