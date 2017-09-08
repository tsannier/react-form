import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './edition.scss'
import { observer } from "mobx-react";
import DragIcon from './Icon/DragIcon.js'
import MenuIcon from './Icon/MenuIcon.js'
import DeleteIcon from './Icon/DeleteIcon.js'
import SettingIcon from './Icon/SettingIcon.js'
import DuplicateIcon from './Icon/DuplicateIcon.js'
import { DragSource, DropTarget } from 'react-dnd';
import EditionAddComponent from './EditionAddComponent.js'
import MotionMenu from "react-motion-menu";
import Setting from './Setting/Setting.js'
import {libelle} from '../../config.js'
import {HSVtoRGB} from '../../../Tools/Color.js'

const editionSource = {

  beginDrag(props) {
    return {
      component : props.data
    };
  },

  };


@DragSource("edition", editionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))
@observer
class Edition extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      button: false,
      settingOpen: false };
    this.handlerOnclick = this.handlerOnclick.bind(this)
    this.handlerMotionMenu = this.handlerMotionMenu.bind(this)
    this.handleSettingPanel = this.handleSettingPanel.bind(this)
    this.handleAddSetting =  this.handleAddSetting.bind(this)
  }


  // Gestion du paramétrage du composant
  handlerOnclick(event) {
    this.setState({ button: true })
    event.stopPropagation();
  }

  handleSettingPanel(event){
    this.setState({settingOpen : !this.state.settingOpen}); 
  }

  handleAddSetting(parameter){
      console.log(parameter)
  }

  handlerMotionMenu(name){
   
    switch(name){
      case "setting": 
        this.setState({settingOpen : !this.state.settingOpen}); 
        break; 
      case "delete": 
          this.props.data.deleteChildren();
        break; 
      case "duplicate": 
        break; 
    }
  }


  render() {
    let data = this.props.data;
   
    const { isDragging , connectDragPreview,  connectDragSource } = this.props;

    let banniereEdtion = (this.state.button && (data.Settings.Count > 0 || data.parent != null)) ? (

      <MotionMenu
        type="circle"
        margin={40}
      >
        <div className={s.buttonParameter} >
          <MenuIcon />
        </div>
        {data.Settings.Count > 0 && <div className={s.buttonParameter} onClick={() => this.handlerMotionMenu("setting")} >
          <SettingIcon />
        </div>}
        {data.parent != null && <div className={s.buttonParameter} onClick={() => this.handlerMotionMenu("delete")} >
          <DeleteIcon />
        </div>}
        { data.parent != null  && <div className={s.buttonParameter} onClick={() => this.handlerMotionMenu("duplicate")} >
          <DuplicateIcon />
        </div>}
      </MotionMenu>) : null;

    return connectDragPreview(
      ((!isDragging)?
        <div className={cx(s.edit)} >
          <div
            onClick={(e) => this.handlerOnclick(e)}
          >
            {connectDragSource(<div className={s.componentType}>{libelle(data.Type)}</div>)}
            <div className={s.editButton}>
              {banniereEdtion}
            </div>
            <div  className={s.component}>
            {this.props.children}
            </div>
            {this.state.setting || true &&
             <Setting 
              onReduce={this.handleSettingPanel}
              onAddSetting={this.handleAddSetting}
              open={this.state.settingOpen}
              settings={data.Settings}
             />
             }
          </div>
        </div>
        : <div className={s.transitDragging}></div>)); 
  }
}

export default Edition;


