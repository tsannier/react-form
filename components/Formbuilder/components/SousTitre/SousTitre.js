import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './sousTitre.scss'
import {renderChildren} from '../../logic.js'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";

@observer
class SousTitre extends React.Component {

  static propTypes = {

  };

  render() {
    let data = this.props.data; 
    let mode = this.props.mode; 
    let global = this.props.global; 


    return ( 
      <div className={s.sousTitre}>
        <div className={s.lib} >
          {render(data.Content("sousTitre"),mode)}
        </div>
          {renderChildren(data,mode,global)}
      </div>
    );
  }
}

export default SousTitre;
