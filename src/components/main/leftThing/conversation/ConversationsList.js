import React from 'react'

// import {dummyConvs} from '../../../../resources/DummyConversations'
import Conversation from './Conversation'
import ListWrapper from '../../ListWrapper'

class ConversationsList extends React.Component {


    render() {
        return (
            <ListWrapper inputHeight="70vh" >
                {this.props.latestConversations.map((convo) => {
                    return <Conversation key={Math.random()} loadConversation={this.props.loadConversation} convo={convo}/>
                })}
            </ListWrapper>
        )
    }
}

export default ConversationsList
