import React from 'react'
import MessageList from './MessageList'

export class MessagesContainer extends React.Component {
        render() {
                return <MessageList messages={this.props.messages}/>
        }
}
