import React from 'react'
import styled from "styled-components";

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

const MessageSender = styled.h3`
    color: purple;
    text-align: left;
`;

const MessageContent = styled.p`
    font-family: ${ props => props.theme.font };
    color: black;
    text-align: right;
`;
