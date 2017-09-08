import { observable, computed, action } from 'mobx';
import { typeContent } from '../config.js'
import factory from './factoryEditComponent.js'

class Content {

    @observable name = "";
    @observable currentLangue = ""; 
    @observable langue = observable.array(); 
    @observable type = typeContent.text;
    @observable value = "";
    @observable multi = false; 
    @observable options = observable.map();
    component = null;

    constructor(component) {
        this.onContentChange = this.onContentChange.bind(this)
        this.component = component;
    }

    get Type() {
        return this.type;
    }
    set Type(_type) {
        this.type = _type;
    }

    get Name() {
        return this.name;
    }
    set Name(_name) {
        this.name = _name;
    }
    

    @computed get Value() {
        return this.value;
    }

    
    set Value(value) { 
        this.value = value
    }

    @computed get Langue() {
        return this.langue;
    }

    set Langue(langue) { 
        this.langue = langue
    }

    @computed get CurrentLangue() {
        return this.currentLangue;
    }

    set CurrentLangue(currentLangue) { 
        this.currentLangue = currentLangue
    }


    @computed get Multi(){
        return this.multi; 
    }

    set Multi(multi){
        this.multi = multi; 

        switch(this.multi){
            case true : 
                this.value = observable.map(); 
                break; 
            case false : 
                this.value = ""; 
        }
    }

    get Options(){
        return this.options
    }

    @action onContentChange(_value) {
        this.value = _value;
    }

    @computed get Render() {
        return factory(this.component.Id, this.type, this.value, this.onContentChange, this.component.Mode);
    }

}

export default Content;