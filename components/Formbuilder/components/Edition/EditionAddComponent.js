import React from 'react';
import { cx } from 'classnames'
import s from './edition.scss'
import AddIcon from '../../assets/icon/plus.svg';
import factoryLogicComponent from '../../Logic/factoryLogicComponent.js'
import { ContextMenuPopup, ContextMenuPopupOptions, ContextMenuPopupOption, ContextMenuPopupTrigger } from 'react-context-menu-popup';
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
       &&  target.Children.length > 0 
       && target.canDrop(source)){ 
      target.moveComponent(source,props.position) 
    }
  },


};


@DropTarget("edition", edtionTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
}))
class EditionAddComponent extends React.Component {

    constructor(props) {
        super(props)
        this.addComponentHandler = this.addComponentHandler.bind(this)
        this.state = {
            addVisible: true, 
            isMenuOpen: false
        };

        this.addComponentHandler = this.addComponentHandler.bind(this);
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }


    addComponentHandler(e, option) {
        let parent = this.props.parent
        let data = { id: uuidv4(), type: option, "children": [] };
        let component = factoryLogicComponent(data, parent, this.props.mode)
        component.Id = data.id;
        component.type = data.type;
        component.Deep = parent.Deep + 1; 
        parent.addChildren(component,this.props.position)
        e.stopPropagation()
    }

    toggle(e) {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
        e.stopPropagation()
    }

    close() {
        this.setState({ isMenuOpen: false });
    }

    getAuthorizeComponent(component, position, deep = 0 ){
        if(deep == 0){

        }else{
            
        }
        
    }

    render() {
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: (<img className={s.addIcon} src={AddIcon} onClick={this.toggle}/>),
            align: 'center'
        };

        this.getAuthorizeComponent(this.props.parent,this.props.position)         
        const { connectDropTarget } = this.props;
    
        

        let options = this.props.parent.ChildrenAuthorize;
        return connectDropTarget(
            <div className={s.addComponent}  >
                { this.state.addVisible && 
                <DropdownMenu {...menuOptions} className={s.menuItems}>
                    {
                        (options.map(option => <li key={option} onClick={(e) => this.addComponentHandler(e, option)} >{ libelle(option)}</li>))
                    }
                </DropdownMenu>
                }
            </div>
        )
    }  
}



export default EditionAddComponent; 
