import React, { PropTypes } from 'react';
import cx from 'classnames';
import { renderChildren } from '../../logic.js'
import { observer } from "mobx-react";
import s from "./edition.scss"
import AddIcon from '../../assets/Icon/add.svg';
import factoryLogicComponent from '../../Logic/factoryLogicComponent.js'
import { libelle } from '../../config.js'
import uuidv4 from 'uuid/v4'
import DropdownMenu from 'react-dd-menu';
import  './dropdownMenu.scss';
import {  DropTarget } from 'react-dnd';



const edtionTarget = {
  
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    let source = monitor.getItem().component; 
    let target = props.parent
 
    if(source.Id !== target.Id
       &&  target.Children.length == 0 
       && target.canDrop(source)){ 
      target.moveComponent(source,0) 
    }
  },


};


@DropTarget("edition", edtionTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
}))
@observer
class ButtonAddComponent extends React.Component {

  constructor(props) {
    super(props)
    this.addComponentHandler = this.addComponentHandler.bind(this)
    this.state = {
      isMenuOpen: false
    };

    this.addComponentHandler = this.addComponentHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }


  addComponentHandler(e,option) {
    let parent = this.props.parent
    let data = { id: uuidv4(), type: option, "children": [] };
    let component = factoryLogicComponent(data, parent, this.props.mode)
    component.Id = data.id;
    component.Type = data.type;
    component.Deep = parent.Deep + 1; 
    parent.addChildren(component)
    e.stopPropagation() 
  }

  toggle(e) {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    e.stopPropagation() 
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    
    let options = this.props.parent.ChildrenAuthorize;   
    const { connectDropTarget } = this.props;

    
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: (
        <div className={s.linkAddComponent} onClick={this.toggle}>
          <div className={s.textAddComponent}>
            + Ajouter un élément à "{libelle(this.props.parent.type)}"
          </div>
        </div>
      ),
      align: 'left'
    };

    return connectDropTarget(
      <div className={s.buttonAddComponent}>
        <DropdownMenu {...menuOptions} className={s.MenuContext}>
          {
            (options.map(option => <li key={option} onClick={(e) => this.addComponentHandler(e,option)} >{ libelle(option)}</li> ))
          }
      </DropdownMenu>
    </div >
    )
  }
}

export default ButtonAddComponent; 