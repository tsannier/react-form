import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './chapitre.scss'
import {renderChildren} from '../../logic.js'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";

@observer
class Chapitre extends React.Component {

  render() {
    let data = this.props.data; 
    let children = data.children; 
    let mode = this.props.mode; 
    let global = this.props.global; 
    
    return ( 
      <div className={s.chapitre}>
        <div className={s.lib}>
         {render(data.Content("chapitre"),mode)}
        </div>
          {renderChildren(data,mode,global)}
      </div>
    );
  }
}

export default Chapitre;
