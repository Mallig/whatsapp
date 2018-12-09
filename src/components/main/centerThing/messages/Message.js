import React from 'react'

import styled from "styled-components";
import MessageSender from "./MessageSender"
import MessageContent from "./MessageContent"

const currentUser = "Mal"

const MessageWrapper = styled.div`
    border-style: solid;
    border-width: 1px;
    color: blue;
    background: ${props => (props.sentByUser) ? 'white' : 'beige' };
    width: 30%;
    position: relative;
    left: ${props => (props.sentByUser) ? '50%' : '10%' };
    padding: 10px;
`

const Message = ({sender, content}) =>
    <MessageWrapper sentByUser={(sender === currentUser)}>
        <MessageSender>{sender}:</MessageSender>
        <MessageContent>"{content}"</MessageContent>
    </MessageWrapper>



export default Message
