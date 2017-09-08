import React, { PropTypes } from 'react';
import cx from 'classnames';
import { renderChildren } from '../../logic.js'
import s from './questionText.scss'
import render from '../../Logic/factoryEditComponent.js'
import {observer} from  "mobx-react";
import { translate } from "react-translate"

@translate("questionText")
@observer
class QuestionText extends React.Component {

  constructor(props){
    super(props)
    const t = this.props.t;
    this.props.data.Result("text").constraint =  { presence: {message: t("validation_require")}, length: { minimum: 2, message : t("validation_min_char") } } ; 
  }

  static propTypes = {
  };

  render() {
 
    let data = this.props.data;
    let mode = this.props.mode; 
    
    return (
      <div>
        {(data.Result("text").ErrorMessage)? <div className={s.MessageError}> {data.Result("text").ErrorMessage} </div> : null}
        <div className={s.questionText}>
          <div className={s.lib}>
            {render(data.Content("question"),mode)}
          </div>
          <div className={s.text}>
             {render(data.Result("text"),mode)}
          </div>
        </div>
      </div>
    ); 
  }
}

export default QuestionText;
