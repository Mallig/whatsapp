import React from 'react'
import { ThemeProvider } from "styled-components"

import MessageWrapper from "./MessageWrapper"
import MessageSender from "./MessageSender"
import MessageContent from "./MessageContent"

const theme = {
    font: "Calibri"
}

var currentUser = "Mal"

const Message = ({sender, content}) => (
    <ThemeProvider theme={theme}>
        <MessageWrapper sentByUser={(sender === currentUser)}>
            <MessageSender>{sender}:</MessageSender>
            <MessageContent>"{content}"</MessageContent>
        </MessageWrapper>
    </ThemeProvider>
)

export default Message
