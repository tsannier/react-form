import React, { PropTypes } from 'react';
import cx from 'classnames';

class MenuIcon extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 344.339 344.339" >
                <g>
                    <rect y="46.06" width="344.339" height="29.52" fill={(this.props.color)? this.props.color : "#FFFFFF"} />
                </g>
                <g>
                    <rect y="156.506" width="344.339" height="29.52"  fill={(this.props.color)? this.props.color : "#FFFFFF"}  />
                </g>
                <g>
                    <rect y="268.748" width="344.339" height="29.531"  fill={(this.props.color)? this.props.color : "#FFFFFF"}  />
                </g>
            </svg>
        );
    }
}

export default MenuIcon; 