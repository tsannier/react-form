import React, { PropTypes } from 'react';
import cx from 'classnames';
import {renderChildren} from '../../logic.js'
import s from './question.scss'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";

@observer
class Question extends React.Component {

  static propTypes = {
  };

  render() {
    let data = this.props.data; 
    return (
       <div>
        <div className={s.question}>
          <p className={s.lib} >
             {render(data.Content("question"),mode)}
          </p>
          <div className={s.reponse}>
            <input type="radio"  value="true"  /> oui 
            <input type="radio"  value="false"  /> non
          </div>
        </div>
        <div className={s.information}>
          <p className={s.lib} >
             {data.Content("reponse").Render}
          </p>
          <textarea/>
        </div>
      </div>
    );
  }
}

export default Question;
