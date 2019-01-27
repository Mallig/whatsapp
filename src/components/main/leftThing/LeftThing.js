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
<<<<<<< HEAD
export const LeftThing = (props) => 
    <LeftThingWrapper>
            <h3>This is the header of the left thing.</h3>
            <ConversationsList latestConversations={props.latestConversations} loadConversation={props.loadConversation}/>
            {console.log('in left thing')}
            {console.log(props.latestConversations)}
    </LeftThingWrapper>
=======
export class LeftThing extends React.Component {
    
    state = {
        latestConversations: []
    }

    async fetchLatestConversations() {
        try {
            const res = await this.props.fetchLatestConversations()
            console.log()
            this.setState({
                latestConversations: res.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetchLatestConversations()
    }
    render() {
        return <LeftThingWrapper>
                    <h3>This is the header of the left thing.</h3>
                    <ConversationsList latestConversations={this.state.latestConversations} loadConversation={this.props.loadConversation}/>
               </LeftThingWrapper>
    }

}
>>>>>>> Uses correct route in conversation client. Now uses async/await correctly.
