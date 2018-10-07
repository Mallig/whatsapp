import React from 'react';

class InvalidDetailsError extends React.Component {

    render() {
        return (
            <div>
                {(this.props.invalidDetails
                  ? <p>Sorry these details are invalid!</p>
                  : null)}
            </div>
        )
    }
}

export default InvalidDetailsError;