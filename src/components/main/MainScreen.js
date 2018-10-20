import React from 'react'
import Navbar from './Navbar'

class MainScreen extends React.Component {

    render() {
        return (
            <div>
                <div>This is the main screen. Welcome to Mal and Hugo's Whatsapp clone, {this.props.username}</div>
                <Navbar orientation='left'/><Navbar orientation='right'/>

            </div>
        )
    }
}

export default MainScreen