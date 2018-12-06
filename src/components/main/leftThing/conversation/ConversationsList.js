import React from 'react'

import {dummyConvs} from './DummyConversations'
import Conversation from './Conversation'
import ListWrapper from '../../ListWrapper'

class ConversationsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dummyConversations: dummyConvs
        }
    }

    render() {
        return (
            <ListWrapper inputHeight="70vh">
                {this.state.dummyConversations.map((convo) => {
                    return <Conversation convo={convo}/>
                })}
            </ListWrapper>
        )
    }
}

export default ConversationsList