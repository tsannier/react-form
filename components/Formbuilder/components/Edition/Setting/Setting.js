import React from 'react';
import PropTypes from 'prop-types';
import s from './setting.scss'
import cx from 'classnames';
import DeleteIcon from '../Icon/DeleteIcon.js'
import ReduceIcon from '../Icon/ReduceIcon.js'
import PlusIcon from '../Icon/PlusIcon.js'
import PanelSetting from './PanelSetting.js'
import { ContextMenuPopup, ContextMenuPopupOptions, ContextMenuPopupOption, ContextMenuPopupTrigger } from 'react-context-menu-popup';


class Setting extends React.Component {

    constructor(props) {
        super(props);
        this.handlerAddSetting = this.handlerAddSetting.bind(this);
        this.handlerDeleteSetting = this.handlerDeleteSetting.bind(this);
    }

    handlerAddSetting(type) {
        this.props.settings.get(type).Active = true;
    }

    handlerDeleteSetting(type) {
        this.props.settings.get(type)
            .Active = false;
    }

    addSettingButton() {
        var selectSetting = this.props.settings.GetAll
            .filter((setting) => (setting.Require == true || setting.Active == true) ? false : true);

        return (selectSetting.length > 0) &&
            (<ContextMenuPopup initialStyles={true} >
                <ContextMenuPopupTrigger>
                    <PlusIcon color={"#0478a0"} />
                </ContextMenuPopupTrigger>
                <ContextMenuPopupOptions className={s.contextMenuPopup}
                    onOptionSelect={(settingType, contextMenuButton) => {
                        this.handlerAddSetting(settingType);
                        contextMenuButton.close();
                    }}
                >
                    {
                        selectSetting.map((setting) => (
                            <ContextMenuPopupOption key={setting.Type} id={setting.Type} >
                                {setting.Libelle}
                            </ContextMenuPopupOption>
                        ))
                    }
                </ContextMenuPopupOptions>
            </ContextMenuPopup>)

    }

    render() {

        let listSetting = this.props.settings.GetAll
            .filter((setting) => (setting.Require == true || setting.Active == true) ? true : false)


        return (
            this.props.open && <div className={s.setting}>
                <div className={s.banniere}>
                    <ul>
                        <li>{this.addSettingButton()}</li>
                        <li className={s.space}></li>
                        <li onClick={this.props.onReduce}><ReduceIcon color={"#0478a0"} /></li>
                    </ul>
                </div>
                <div className={s.panelSetting}>
                    {listSetting.map((setting) => <PanelSetting key={setting.Type} setting={setting} onDeleteSetting={this.handlerDeleteSetting} />)}
                </div>
            </div>
        );
    }
}


Setting.defaultProps = {
    onReduce: () => { },
    onAddSetting: () => { },
    open: true
};

Setting.propTypes = {
    onReduce: PropTypes.func,
    onAddSetting: PropTypes.func,
    open: PropTypes.bool.isRequired
}

export default Setting; 