import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from "./formBuilder.scss";
import {renderChildren} from '../../logic.js'
import {observer} from  "mobx-react";


@observer
class FormBuilder extends React.Component {

  render() {
    let data = this.props.data; 
    let mode = this.props.mode; 
    let global = this.props.global; 

    return ( 
    <div className={s.formBuilder}>
        {renderChildren(data,mode,global)}
    </div>
    );
  }
}

export default FormBuilder;
