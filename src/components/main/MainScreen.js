import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
// import {UsersClient} from './UsersClient'
import {ConversationsClient} from './ConversationsClient'
import styled from 'styled-components'

const conversationClient = new ConversationsClient()

class MainScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            interlocutor: 2,
            conversation: [],
            latestConversations: [],
            currentUserId: this.props.currentUserId,
            currentConversationId: undefined,
            username: this.props.username
        }
    }

    fetchConversation = async (id=this.state.currentUserId) => {
        const res = await conversationClient.fetchConversationById(id)
        console.log(res)
        if (res.data) this.setState({ conversation: res.data })
        console.log(this.state.conversation)
        this.setState({currentConversationId: id})
    }

    componentDidMount() {
        // this.fetchConversation()
        this.fetchLatestConversations()
    }
    
    fetchLatestConversations = async () => {
        try {
            const res = await conversationClient.fetchLatestConversations(this.state.currentUserId)
            if (res.data) this.setState({ latestConversations: res.data })
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return <MainScreenWrapper>
            <LeftThing latestConversations={this.state.latestConversations} loadConversation={this.fetchConversation}/>
            <CenterThing username={this.props.username} messages={this.state.conversation}/>
            <RightThingWrapper>
                This is the right thing
            </RightThingWrapper>
        </MainScreenWrapper>
    }
}

export default MainScreen

const MainScreenWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

const RightThingWrapper = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: blue;

    width: 10%;
    text-align: right;
    float: right;
    padding: 0% 2% 0% 0%;
`
