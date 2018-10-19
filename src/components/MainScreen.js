import React from 'react'

class MainScreen extends React.Component {

    render() {
        return (
            <div>This is the main screen. Welcome to Mal and Hugo's Whatsapp clone, {this.props.username}</div>
        )
    }
}

export default MainScreen