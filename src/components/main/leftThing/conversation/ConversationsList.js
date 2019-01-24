import React from 'react'

// import {dummyConvs} from '../../../../resources/DummyConversations'
import Conversation from './Conversation'
import ListWrapper from '../../ListWrapper'

class ConversationsList extends React.Component {
    render() {
        return (
            <ListWrapper inputHeight="70vh" >
                {this.props.latestConversations.map((convo) =>
                    <Conversation key={convo.conversation_id} convo={convo} loadConversation={this.props.loadConversation}/>
                )}
                {console.log('in conversation list')}
                {console.log(this.props.latestConversations)}
            </ListWrapper>
        )
    }
}

export default ConversationsList
