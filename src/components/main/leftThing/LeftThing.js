import React from 'react'
import styled from 'styled-components'
import ConversationsList from './conversation/ConversationsList'

const LeftThingWrapper = styled.section`
    border-style: solid;
    border-width: 2px;
    border-color: black;

    width: 25%;
    text-align: left;
    padding: 0% 2% 2% 2%;
`
export const LeftThing = (props) => 
    <LeftThingWrapper>
            <h3>This is the header of the left thing.</h3>
            <ConversationsList latestConversations={props.latestConversations} loadConversation={props.loadConversation}/>
    </LeftThingWrapper>
