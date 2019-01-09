import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
import {UsersClient} from './UsersClient'
import {ConversationsClient} from './ConversationsClient'
import styled from 'styled-components'

class MainScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            interlocutor: undefined,
            users: undefined,
            conversation: undefined
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
        ConversationsClient.fetchConversation(1, 2)
        .then(res => {
            this.setState({conversation: res.data.map(message => message["id"] + ", " + message["content"] + "\n")})
        })
    }

    findNameById = id => "Jon"

    loadConversation = id => this.setState({interlocutor: this.findNameById(id)})

    render() {
        return <MainScreenWrapper>
            <LeftThing loadConversation={this.loadConversation}/>
            <CenterThing username={this.props.username} interlocutor={this.state.interlocutor}/>
            <RightThingWrapper>
                {this.state.users}
                {this.state.conversation}
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
