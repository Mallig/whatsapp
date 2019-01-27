import React from 'react'
import MessageList from './MessageList'

export class MessagesContainer extends React.Component {

        state = {
                messages: []
        }

        async loadMessages() {
                try {
                        const res = await this.props.loadMessages()
                        console.log(res)
                        this.setState({ messages: res.data})
                } catch (err) {
                        console.log(err)
                }
        }

        componentDidMount() {
                this.loadMessages()
        }

        render() {
                return <MessageList messages={this.state.messages}/>
        }
}
