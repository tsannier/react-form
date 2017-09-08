import {observable, computed, action} from 'mobx';
import {typeContent} from '../config.js'
import validate from 'validate.js'
import factory from './factoryEditComponent.js'

class Result {

    @observable name = "";
    @observable type =  typeContent.text; 
    @observable value = "";
    @observable multi = false; 
    @observable options = observable.map();
    @observable constraint = {}; 
    @observable errorMessage = ""; 
    @observable label = ""; 
    component =  null; 


    constructor(component){
        this.onResultChange = this.onResultChange.bind(this)
        this.component = component; 

    }

    @computed get Type() { 
        return this.type; 
    }
    set Type(_type) {
        this.type = _type; 
    }
    @computed get Name() { 
        return this.name; 
    }
    set Name(_name) {
        this.name = _name; 
    }

    @computed  get Value() { 
        return this.value; 
    }

    set Value(value) { 
        this.value = value
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

    get Label(){
        return this.label
    }

    set Label(label){
        this.label = label;
    }

    @computed  get ErrorMessage() { 
        return this.errorMessage; 
    }

    @computed get Render(){
        return factory(this.component.Id, this.type,this.value,this.onResultChange,this.component.Mode);
    }

   set ErrorMessage(_errorMessage) {
        this.errorMessage = _errorMessage; 
    }

    set Constraint(_constraint) {
        this.constraint = _constraint; 
    }

    @action onResultChange(_value){
            this.value = _value; 
    }

    get Options(){
        return this.options
    }

    validation(){
        let validation = validate.single(this.value, this.constraint); 
        if(validation != undefined){
            this.errorMessage = validation[0]
            return false; 
        }
         this.errorMessage = ""; 
        return true 
    }

    get IsValide(){
        return (validate.single(this.value, this.constraint) === undefined)? true  : false ; 
    }
}

export default Result;