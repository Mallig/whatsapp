import React from 'react'
import MessageList from './MessageList'

class Messages extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dummyMessages: [
                {
                    content: "Message content",
                    sender: "Mal"
                },
                {
                    content: "Message 2 content",
                    sender: "Jon"
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