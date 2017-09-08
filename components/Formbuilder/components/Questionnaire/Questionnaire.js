import React, { PropTypes } from 'react';
import cx from 'classnames';
import {renderChildren} from '../../logic.js'
import { fromJS, List, Set }  from 'immutable'
import {observer} from  "mobx-react";

@observer
class Questionnaire extends React.Component {

  static propTypes = {
  };

  render() {

    let data = this.props.data; 
    let mode = this.props.mode; 
    let global = this.props.global; 

    return (
      <div>
         {renderChildren(data,mode,global)}
      </div>
    );
  }
}

export default Questionnaire;
