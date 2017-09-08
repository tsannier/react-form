import React, { PropTypes } from 'react';
import Component from './Component.js'
import factoryLogicComponent from './factoryLogicComponent.js'
import {mode, behavior} from '../config.js'


// Construction du formBuilder
const buildFormbuilder = (data,parent,_mode,_langue,_currentLangue) => {


    let component = factoryLogicComponent(data,parent,_mode); 
    component.Id = (data.hasOwnProperty('id'))? data.id : component.Id;  
    component.Type = (data.hasOwnProperty('type'))? data.type : component.Type;
    component.CanDrag = (data.hasOwnProperty('canDrag'))? data.canDrag : component.CanDrag
    component.Langue = _langue; 
    component.currentLangue = _currentLangue; 
    
    // Ajouter le content
    for(let id in data.content){
        let content = component.Content(data.content[id].name)
        content.Langue = _langue; 
        content.CurrentLangue = _currentLangue
        if(content)
            content.Value = data.content[id].value
    }

    // Ajouter le Resultat
    for(let id in data.result){
        let result = component.Result(data.result[id].name)
        if(result)
            result.Value = data.result[id].value
    }

    // Ajouter les enfants
    if(data.hasOwnProperty("children") && component.Behavior == behavior.decorator){
        for (let index in data.children) {
            if(component.ChildrenAuthorize.find( authorize => authorize == data.children[index].type ))
            component.addChildren(buildFormbuilder(data.children[index],component,_mode,_langue,_currentLangue)); 
        }
    }

    
    return component;
}

export default buildFormbuilder; 