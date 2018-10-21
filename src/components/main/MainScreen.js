import React from 'react'
import Messages from './messages/Messages'

const MainScreen = ({username}) => (
    <div id='mainSection'>
        <section id='leftThing'>this is the left</section>
        <section id='centerThing'>
            <p>This is the main screen of Mal and Hugo's Whatsapp clone. Welcome, {username}!</p>
            <Messages/>
        </section>
        <section id='rightThing'>this is the right</section>
    </div>
)

export default MainScreen