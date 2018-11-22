import React from 'react'

export const Conversation = ({ convo }) =>
    <div>
        <h5>{convo.participant}</h5>
        <p>{convo.displayMessage}</p>
    </div>
