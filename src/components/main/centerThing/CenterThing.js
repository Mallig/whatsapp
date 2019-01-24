import React from 'react'
import styled from 'styled-components'
import {MessagesContainer} from './messages/MessagesContainer'
import {currentUser} from "../../../helpers/jwt";

const CenterThingWrapper = styled.section`
    border-style: solid;
    border-width: 2px;
    border-color: red;

    width: 65%;
    height: 80%;
    text-align: center;
    padding: 0% 0% 2% 0%;
`

export class CenterThing extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        username: ""
      }
    }

    componentDidMount() {
      this.getUsername()
    }

    getUsername = async () => {
      try {
        await currentUser()
        .then(res => {
          this.setState({username: res})
        })
      } catch (err) {
      }
    }

    render() {
        return <CenterThingWrapper>
                <h2>This is the main screen of Mal and Hugo's Whatsapp clone. Welcome, {this.state.username}!</h2>
                <MessagesContainer interlocutor={this.props.interlocutor} messages={this.props.messages}/>
            </CenterThingWrapper>
    }
}
