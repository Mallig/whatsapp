import React from 'react'
import dummyConvs from './DummyConversations'

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
                    return <div>
                            <h5>{convo.participant}</h5>
                            <p>{convo.displayMessage}</p>
                        </div>
                })}
            </div>
        )
    }
}

export default ConversationsList