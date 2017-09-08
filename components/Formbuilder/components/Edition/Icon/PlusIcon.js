import React, { PropTypes } from 'react';
import cx from 'classnames';

class PlusIcon extends React.Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 42 42"  width="20px" height="20px">
                <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "  fill={(this.props.color)? this.props.color : "#FFFFFF"}  />
            </svg>
        );
    }
}

export default PlusIcon;






