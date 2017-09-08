import React, { PropTypes } from 'react';
import cx from 'classnames';
import {renderChildren} from '../../logic.js'
import s from './questionBool.scss'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";
import { translate } from "react-translate"

@translate("questionBool")
@observer
class QuestionBool extends React.Component {

  constructor(props){
    super(props)
    const t =  this.props.t
    this.props.data.Result("boolean").constraint =  { presence: {message: t("validation_require")}} ; 
  }

  static propTypes = {
  };
 
  render() {
    let data = this.props.data; 
    let mode = this.props.mode; 

    return (
       <div>
        {(data.Result("boolean").ErrorMessage)? <div className={s.MessageError}>{data.Result("boolean").ErrorMessage} </div> : null}
        <div className={s.question}>
          <div className={s.lib} >
             {render(data.Content("question"),mode)}
          </div>
          <div className={s.reponse}>
             {render(data.Result("boolean"),mode)}
           </div>
        </div>
      </div>
    );
  }
}

export default QuestionBool;
