import React from 'react'

class WelcomeMessage extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to whatsapp, {this.props.name}!</p>
            </div>
        )
    }
}

export default WelcomeMessage