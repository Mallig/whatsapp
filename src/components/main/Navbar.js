import React from 'react'

const Navbar = (props) => {
    return (
        <div style={{'textAlign': `${props.orientation}`}}>
            This is the Navbar on the {props.orientation}
        </div>
    )
}

export default Navbar