import React from 'react'
import styled from 'styled-components'

import ConvoParticipant from './ConvoParticipant'
import ConvoMessage from './ConvoMessage'

export const Conversation = ({convo, loadConversation}) => {
    const load = () => loadConversation(convo.conversation_id)
    return <ConversationWrapper onClick={load}>
        <ConvoParticipant>{convo.participant_ids}</ConvoParticipant>
        <ConvoMessage>{convo.last_message}</ConvoMessage>
    </ConversationWrapper>
}

export default Conversation;

const ConversationWrapper = styled.div`
    border-style: solid;
    border-width: 1px;
    color: blue;
    background: white;
`
