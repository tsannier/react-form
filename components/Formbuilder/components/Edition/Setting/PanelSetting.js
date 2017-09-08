import React from 'react';
import PropTypes from 'prop-types';
import s from './setting.scss'
import cx from 'classnames';
import DeleteIcon from '../Icon/DeleteIcon.js'
import { ContextMenuPopup, ContextMenuPopupOptions, ContextMenuPopupOption, ContextMenuPopupTrigger } from 'react-context-menu-popup';
import render from '../../../Logic/factoryEditComponent.js'
import {mode} from '../../../config.js'

class PanelSetting extends React.Component {

    constructor(props){
        super(props)
        this.handlerOnDeleteSetting = this.handlerOnDeleteSetting.bind(this)
    }

    handlerOnDeleteSetting(){
        this.props.onDeleteSetting(this.props.setting.Type)
    }

    render() {

        let setting = this.props.setting
        let listeParameter = setting.Parameter

        return (
            <div className={s.panel}>
                <ul className={s.panelBanniere}>
                    <li><h3>{setting.Libelle}</h3></li>
                    <li className={s.space}></li>
                    {(setting.Require == false)? <li onClick={this.handlerOnDeleteSetting} ><DeleteIcon color={"#0478a0"} /></li> : null}
                </ul>
                <hr />
                <div className={s.panelContent}>
                    {listeParameter.map((parameter) =>
                        (<div>
                            <label>{parameter.Label} :</label>{render(parameter, mode.execution)}
                        </div>
                        ))}
                </div>
            </div>
        )
    }
}

PanelSetting.defaultProps = {
    setting: {},
    onDeleteSetting: () => { }
};

PanelSetting.propTypes = {
    setting: PropTypes.object,
    onDeleteSetting: PropTypes.func,
}

export default PanelSetting; 