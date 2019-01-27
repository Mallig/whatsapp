import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
// import {UsersClient} from './UsersClient'
import {ConversationsClient} from './ConversationsClient'
import ListWrapper from './ListWrapper'
import styled from 'styled-components'

class MainScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            interlocutor: 2,
            // users: undefined,
            conversation: [],
            latestConversations: [],
            currentUserId: this.props.currentUserId,
            username: this.props.username
        }
    }

    fetchConversation = async () => {
        return await ConversationsClient.fetchConversation(this.state.currentUserId, this.state.interlocutor)
    }

    fetchLatestConversations = async () => {
        return await ConversationsClient.fetchLatestConversations(this.state.currentUserId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.interlocutor !== this.state.interlocutor) {
            ConversationsClient.fetchConversation(this.state.currentUserId, this.state.interlocutor)
            .then(res => {
                this.setState({conversation: res.data})
            }).catch(err => {
                console.log(err)
            })
        }
    }

    loadConversation = async (id) => {
        await ConversationsClient.fetchConversation(this.state.currentUserId, id)
        .then(res => {
            this.setState({interlocutor: id})
            this.setState({conversation: res.data})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <MainScreenWrapper>
            <LeftThing fetchLatestConversations={this.fetchLatestConversations} loadConversation={this.loadConversation}/>
            <CenterThing username={this.props.username} loadMessages={this.fetchConversation}/>
            <RightThingWrapper>
                <ListWrapper fontSize='30' inputHeight='90vh'>
                    {/* {this.state.users} */}
                </ListWrapper>
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
