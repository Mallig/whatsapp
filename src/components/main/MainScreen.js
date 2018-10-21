import React from 'react'
import Messages from './messages/Messages'

const MainScreen = (props) => (
    <div id='container' >
        <section id='leftThing'>this is the left</section>
        <section id='centerThing'>
            <p>This is the main screen of Mal and Hugo's Whatsapp clone. Welcome, {props.username}!</p>
            <Messages/>
        </section>
        <section id='rightThing'>This is the right</section>
    </div>
)

export default MainScreen