import React from 'react'
import {dummyConvs} from './DummyConversations'
import {Conversation} from './Conversation'

class ConversationsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dummyConversations: dummyConvs
        }
    }

    render() {
        return (
            <div id='itemOnConversationsList'>
                {this.state.dummyConversations.map((convo) => {
                    return <Conversation key={convo.displayMessage} convo={convo}/>
                })}
            </div>
        )
    }
}

export default ConversationsList