import  { observable, computed, action, toJS } from 'mobx';
import buildFormbuilder from '../Logic/buildFormbuilder.js'
import Component from '../Logic/Component.js'
import { mode, type } from '../config.js'
const uuidv4 = require('uuid/v4');

class ComponentStore {

    @observable formBuilder = {};
    @observable _mode = mode.edition;
    @observable _langue = observable.array();
    @observable _currentLangue = ""; 

    constructor(_data,_mode,_langue,_currentLangue) {
        this.Mode = _mode
        this.Langue = _langue
        this.CurrentLangue = _currentLangue; 
        this.formBuilder =  buildFormbuilder(_data, null, this.Mode,_langue,_currentLangue);
    }

    @computed get FormBuilder(){
        return this.formBuilder; 
    }

    @action changeMode(_mode) {
        this.Mode = _mode; 
        if (this.formBuilder != {}) { 
            this.formBuilder = buildFormbuilder(toJS(this.formBuilder), null, this.Mode,this._langue)
        }
    }


    set Langue(_langue){
        this._langue = _langue; 
    }

    get Langue(){
        return this._langue; 
    }

    get CurrentLangue(){
        return this._currentLangue; 
    }

    set CurrentLangue(_currentLangue){
        this._currentLangue = _currentLangue
    }

    @computed get Mode() {
        return this._mode
    }

    set Mode (_mode) {
  
        this._mode = _mode;
    }

    parseForm() {
        return this.formBuilder.parseComponent()
    }

    validationForm() {
        return this.formBuilder.validationComponent();
    }

}



export default ComponentStore;