import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './bool.scss'
import { observer } from "mobx-react";
import { mode } from '../../../config.js'
import { provideTranslations } from 'react-translate-maker';
import { translate } from "react-translate"
import  uuidv4 from 'uuid/v4'
 
@translate("bool")
@observer
class Bool extends React.Component {
  constructor(props) {
    super(props);
    this.handlerBool = this.handlerBool.bind(this)
  }

  handlerBool(event){
    this.props.content.Value = event.target.value; 
  }

  render(){
    
    const t = this.props.t;
    let component = null;
    let value = this.props.content.Value; 
    let content = null 
    let id = this.props.content.component.Id; 
    if(value == "false") content = t("non"); 
    else if(value == "true") content =  t("oui"); 
 
    switch (this.props.mode) {
      case mode.lecture:
        component = (
          <div> 
            {content}
          </div>
        )
        break;
      case mode.execution:
      case mode.edition:
        component = (
          <div >
            <input type="radio"  name={uuidv4()} value="true" checked={(value == "true") ? true : false} onClick={(e) => this.handlerBool(e) }/>  <label className={s.radioLabel}>{t("oui")}</label>
            <input type="radio"  name={uuidv4()} value="false" checked={(value == "false") ? true : false}  onClick={(e) => this.handlerBool(e) } /><label className={s.radioLabel}>{t("non")}</label>
        </div>
        )
        break;
    }
    
    return component; 
  }
}
export default Bool; 
