import React from 'react'
import MessageList from './MessageList'

class Messages extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dummyMessages: [
                {
                    content: "Hey Jon, how are you?",
                    sender: "Mal"
                },
                {
                    content: "I'm great thanks, have you been well?",
                    sender: "Jon"
                },
                {
                    content: "Actually, I'm in a bit of a sticky situation",
                    sender: "Jon"
                },
                {
                    content: "Could you help me out? I need a lift from Mexico",
                    sender: "Jon"
                },
                {
                    content: "Sorry to hear that mate, I'm a bit busy atm :L",
                    sender: "Mal"
                },
                {
                    content: "You suck",
                    sender: "Jon"
                },
                {
                    content: "I'm going to die in jail...",
                    sender: "Jon"
                },
                {
                    content: "mal has read this message",
                    sender: "Mal"
                },
                {
                    content: "are you going to reply?",
                    sender: "John"
                },
                {
                    content: "no",
                    sender: "Mal"
                },
                {
                    content: "nice knowing you",
                    sender: "John"
                }
            ]
        }
    }

    render() {
        return <div id='content'>
            <MessageList messages={this.state.dummyMessages}/>
        </div>
        
    }
}

export default Messages