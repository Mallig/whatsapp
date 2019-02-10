import React from 'react'
import styled from 'styled-components'

import ConvoParticipant from './ConvoParticipant'
import ConvoMessage from './ConvoMessage'

export class Conversation extends React.Component {

    load = (e) => {
        e.preventDefault()
        this.props.loadConversation(this.props.convo.conversation_id)
    }
    
    render() {
        return <ConversationWrapper onClick={this.load}>
            <ConvoParticipant>{this.props.convo.participant_ids}</ConvoParticipant>
            <ConvoMessage>{this.props.convo.last_message}</ConvoMessage>
        </ConversationWrapper>
    }
}
export default Conversation;

const ConversationWrapper = styled.div`
    border-style: solid;
    border-width: 1px;
    color: blue;
    background: white;
`
