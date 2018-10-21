import React from 'react'
import Messages from './messages/Messages'
import LeftThing from './leftThing/LeftThing'

const MainScreen = ({username}) => (
    <div id='mainSection'>
        <section id='leftThing'>
            <LeftThing/>
        </section>
        <section id='centerThing'>
            <h2>This is the main screen of Mal and Hugo's Whatsapp clone. Welcome, {username}!</h2>
            <Messages/>
        </section>
        <section id='rightThing'>this is the right</section>
    </div>
)

export default MainScreen