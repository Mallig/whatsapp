import React from 'react'
import Navbar from './Navbar'
import Messages from './messages/Messages'

const MainScreen = (props) => (
    <div>
        <div>This is the main screen. Welcome to Mal and Hugo's Whatsapp clone, {props.username}</div>
        <Navbar orientation='left'/><Navbar orientation='right'/>
        <Messages/>
    </div>
)

export default MainScreen