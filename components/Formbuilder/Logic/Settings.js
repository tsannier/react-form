import {observable, computed, action} from 'mobx';
import {typeContent} from '../config.js'
import validate from 'validate.js'
import factory from './factorySetting.js'
import {typeSetting} from '../config.js'

class Settings {

    @observable _settings = observable.array();

    constructor(component){
        this.component = component; 
    }

    addSetting(setting){
        this._settings.push(factory(setting,this.component))
    }

    get Count(){
        return this._settings.length; 
    }

    get GetAll(){
        return this._settings; 
    }

    get(type){
       return  this._settings.find((setting) => setting.Type == type)
    }

}

class Setting {
    @observable _type = null
    @observable _libelle = ""
    @observable _require = false
    @observable _active  = false; 
    @observable _listener = observable.array(); 
    @observable _parameter = observable.array(); 

    constructor(component){
        this.component = component; 
    }

    get Type(){
        return this._type 
    }

    set Type(_type){
        this._type = _type; 
    }

    get Libelle(){
        return this._libelle 
    }

    set Libelle(_libelle){
        this._libelle = _libelle; 
    }

    get Require(){
        return this._require 
    }

    set Require(_require){
        this._require = _require; 
    }

    get Active(){
        return this._active 
    }

    set Active(_active){
        this._active = _active; 
    }

    get Parameter(){
        return this._parameter 
    }

    set Parameter(_parameter){
        this._parameter = _parameter; 
    }

    addListener(object,value){
        this._listener.push({object : object, value : value});
    }

    addParameter(parameter){
        this._parameter.push(parameter); 

    }


}


export default Settings;
export {Setting}