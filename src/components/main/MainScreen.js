import React from 'react'
import {CenterThing} from './centerThing/CenterThing'
import {LeftThing} from './leftThing/LeftThing'
import {UsersClient} from './UsersClient'
import styled from 'styled-components'

export class MainScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            interlocutor: undefined,
            users: undefined
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
    }

    findNameById = id => "Jon"

    loadConversation = id => this.setState({interlocutor: this.findNameById(id)})

    render() {
        return <MainScreenWrapper>
            <LeftThing loadConversation={this.loadConversation}/>
            <CenterThing username={this.props.username} interlocutor={this.state.interlocutor}/>
            <RightThingWrapper>
                {this.state.users}
            </RightThingWrapper>
        </MainScreenWrapper>
    }
}

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
