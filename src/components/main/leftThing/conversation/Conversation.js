import React from 'react'

import ConversationWrapper from './ConversationWrapper'
import ConvoParticipant from './ConvoParticipant'
import ConvoMessage from './ConvoMessage'

export const Conversation = ({ convo }) =>
    <ConversationWrapper>
        <ConvoParticipant>{convo.participant}</ConvoParticipant>
        <ConvoMessage>{convo.displayMessage}</ConvoMessage>
    </ConversationWrapper>

export default Conversation;