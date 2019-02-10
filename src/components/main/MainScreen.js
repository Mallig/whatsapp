import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
// import {UsersClient} from './UsersClient'
import {ConversationsClient} from './ConversationsClient'
import styled from 'styled-components'

class MainScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            interlocutor: 2,
            conversation: [],
            latestConversations: [],
            currentUserId: this.props.currentUserId,
            username: this.props.username
        }
    }

    fetchConversation = async () => {
        try {
            const res = await ConversationsClient.fetchConversationById(this.state.currentUserId)
            console.log(res)
        if (res.data) this.setState({ conversation: res.data })
        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetchConversation()
        this.fetchLatestConversations()
    }
    
    fetchLatestConversations = () => {
        const res = ConversationsClient.fetchLatestConversations(this.state.currentUserId)
        if (res.data) this.setState({ latestConversations: res.data })
    }
    
    loadConversation = (id) => {
        const res = ConversationsClient.fetchConversationById(id)
        if (res.data) this.setState({conversation: res.data})
    }

    render() {
        return <MainScreenWrapper>
            <LeftThing latestConversations={this.state.latestConversations} loadConversation={this.loadConversation}/>
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
