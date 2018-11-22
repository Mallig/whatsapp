import React from 'react'
import ConversationsList from './ConversationsList'
import styled from 'styled-components'

class LeftThing extends React.Component {

    render() {
        return (
            <div>
                <h3>This is the header of the left thing.</h3>
                <ConversationsList/>
            </div>
        )
    }
}

export default LeftThing