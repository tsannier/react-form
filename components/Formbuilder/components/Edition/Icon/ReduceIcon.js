import React, { PropTypes } from 'react';
import cx from 'classnames';

class ReduceIcon extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 49.859 49.859"  width="20px" height="20px">
                <g>
                    <path d="M45.964,21.034H3.896C1.744,21.034,0,22.778,0,24.93s1.743,3.895,3.896,3.895h42.068   c2.151,0,3.895-1.744,3.895-3.895S48.116,21.034,45.964,21.034z" fill={(this.props.color)? this.props.color : "#FFFFFF" } />
                </g>
            </svg>
        );
    }
}

export default ReduceIcon; 