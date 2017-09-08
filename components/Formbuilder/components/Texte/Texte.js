import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './texte.scss'
import {renderChildren} from '../../logic.js'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";

@observer
class Texte extends React.Component {

  static propTypes = {

  };

  render() {
    let data = this.props.data; 
    let mode = this.props.mode; 
    let global = this.props.global; 

    return ( 
      <div className={s.texte}>
        {render(data.Content("texte"),mode)}
      </div>
    );
  }
}

export default Texte;