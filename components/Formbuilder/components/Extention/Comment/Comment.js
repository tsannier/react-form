import React, { PropTypes } from 'react';
import cx from 'classnames';
import { observer } from "mobx-react";

@observer
class Comment extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                Commentaire 
            </div>
        );
    }
}

export default Comment;
