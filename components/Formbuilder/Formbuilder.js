import React, { PropTypes } from 'react';
import cx from 'classnames';
import {renderComponent} from './logic.js'
import {observer} from "mobx-react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


@observer 
@DragDropContext(HTML5Backend)
class Formbuilder extends React.Component {

  static propTypes = {
  };

  constructor(props){
      super(props);
  }


    
  render() {
    let formBuilder = this.props.data.formBuilder; 
    let mode = this.props.data.Mode; 

    return (
      <div>
        {renderComponent(formBuilder,mode,)}
      </div>
     
    ); 
  }
}


export default Formbuilder;
