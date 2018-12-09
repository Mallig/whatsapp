import React from 'react'

import ConversationWrapper from './ConversationWrapper'
import ConvoParticipant from './ConvoParticipant'
import ConvoMessage from './ConvoMessage'

export const Conversation = ({convo, loadConversation}) => {
    const load = () => loadConversation(convo.id)
    return <ConversationWrapper onClick={load}>
        <ConvoParticipant>{convo.participant}</ConvoParticipant>
        <ConvoMessage>{convo.displayMessage}</ConvoMessage>
    </ConversationWrapper>
}

export default Conversation;