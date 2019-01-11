import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
import {UsersClient} from './UsersClient'
import {ConversationsClient} from './ConversationsClient'
import styled from 'styled-components'

class MainScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            interlocutor: 2,
            users: undefined,
            conversation: [],
            currentUserId: this.props.currentUserId,
            username: this.props.username
        }
    }

    componentDidMount() {
        UsersClient.fetchUsers()
        .then(res => {
            this.setState({users: res.data.map(each => each["id"] + ", " + each["username"] + " \n")})
        })
        .catch(err => {
            console.log(err)
        })
        ConversationsClient.fetchConversation(this.state.currentUserId, this.state.interlocutor)
        .then(res => {
            this.setState({conversation: res.data})
        }).catch(err => {
            console.log(err)
        })
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

    loadConversation = id => {
        this.setState({interlocutor: id})

        ConversationsClient.fetchConversation(this.state.currentUserId, this.state.interlocutor)
        .then(res => {
            this.setState({conversation: res.data})
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <MainScreenWrapper>
            <LeftThing loadConversation={this.loadConversation}/>
            <CenterThing username={this.props.username} messages={this.state.conversation}/>
            <RightThingWrapper>
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

const RightThingWrapper = styled.section`
    border-style: solid;
    border-width: 2px;
    border-color: blue;

    width: 10%;
    text-align: right;
    float: right;
    padding: 0% 2% 0% 0%;
`
