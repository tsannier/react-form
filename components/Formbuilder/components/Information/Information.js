import React, { PropTypes } from 'react';
import cx from 'classnames';
import {renderChildren} from '../../logic.js'
import s from './information.scss'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";

@observer
class Information extends React.Component {

  constructor(props){
    super(props)
  }

  static propTypes = {
  };
 
  render() {
    let data = this.props.data; 
    let mode = this.props.mode; 

    return (
       <div>
        <div className={s.information}>
          <div className={s.lib} >
             {render(data.Content("information"),mode)}
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
