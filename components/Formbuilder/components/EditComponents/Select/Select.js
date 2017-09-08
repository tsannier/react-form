import React, { PropTypes } from 'react';
import cx from 'classnames';
import { observer } from "mobx-react";
import { mode } from '../../../config.js'
import ReactSelect from  'react-select';
import {toJS} from 'mobx'
import s from './select.scss';


@observer
class Select extends React.Component {
  

  constructor(props){
		super(props)
		
		console.log(this.props.content)

    this.state = {
      disabled: false,
			crazy: false,
			value: [],
    }

    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }

	handleSelectChange(values) {

		if(this.props.multi){

		}
		else this.props.content.Value = values.value

  }
  
	toggleDisabled (e) {
		this.setState({ disabled: e.target.checked });
  }
  
	render () {

    let content = this.props.content; 
		let values = (content.multi)? toJS(content.Value) : content.Value; 
		console.log(values)
		let options = []
		for(let propertyName in toJS(content.Options))
			 options.push({value : propertyName , label : toJS(content.Options)[propertyName]})

		return (
				<ReactSelect key={content.Id} values={values} options={options} name={content.Id}  multi={content.Multi} className={s.wrap}   onChange={this.handleSelectChange} />
		);
	}
}
export default Select; 


