import React from 'react'

import {dummyConvs} from '../../../../resources/DummyConversations'
import Conversation from './Conversation'
import ListWrapper from '../../ListWrapper'

class ConversationsList extends React.Component {

    constructor() {
        super()
        this.state = {
            dummyConversations: dummyConvs
        }
    }


    render() {
        return (
            <ListWrapper inputHeight="70vh" >
                {this.state.dummyConversations.map((convo) =>
                    <Conversation key={convo.id} convo={convo} loadConversation={this.props.loadConversation}/>
                )}
            </ListWrapper>
        )
    }
}

export default ConversationsList
