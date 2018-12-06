import React from 'react'
import Messages from './messages/Messages'
import LeftThing from './leftThing/LeftThing'
import styled from 'styled-components'

const MainScreenWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

const MainScreen = ({username}) => (
    <MainScreenWrapper>
        <LeftThing/>
        <CenterThingWrapper>
            <h2>This is the main screen of Mal and Hugo's Whatsapp clone. Welcome, {username}!</h2>
            <Messages/>
        </CenterThingWrapper>
        <RightThingWrapper>
            this is the right thing
        </RightThingWrapper>
    </MainScreenWrapper>
)

export default MainScreen

const RightThingWrapper = styled.section`
    border-style: solid;
    border-width: 2px;
    border-color: blue;

    width: 10%;
    text-align: right;
    float: right;
    padding: 0% 2% 0% 0%;
`

const CenterThingWrapper = styled.section`
    border-style: solid;
    border-width: 2px;
    border-color: red;

    width: 65%;
    height: 80%;
    text-align: center;
    padding: 0% 0% 2% 0%;
`