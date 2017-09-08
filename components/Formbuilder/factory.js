import React from 'react';
import Questionnaire from './components/Questionnaire'
import Chapitre from './components/Chapitre'
import Question from './components/Question'
import QuestionBool from './components/QuestionBool'
import QuestionText from './components/QuestionText'
import Edition from './components/Edition'
import SousTitre from './components/SousTitre'
import FormBuilder from './components/FormBuilder'
import Texte from './components/Texte'
import Information from './components/Information'
import {type,mode} from './config.js'


const factory = (_component,_mode) => {

    if(!_component){
        console.error('Aucun composant n\' a été envoyé à la factory'); 
        return undefined; 
    }

    var newComponent = null; 

    switch(_component.type){
        case type.questionnaire : 
            newComponent =  <Questionnaire key={_component.Id} data={_component} mode={_mode} />
            break; 
        case type.texte : 
            newComponent =  <Texte key={_component.Id} data={_component} mode={_mode} />
            break; 
        case type.chapitre : 
            newComponent =  <Chapitre key={_component.Id} data={_component} mode={_mode}   />
            break; 
        case type.question : 
            newComponent =  <Question key={_component.Id} data={_component} mode={_mode}  />
            break; 
          case type.questionBool : 
            newComponent =  <QuestionBool key={_component.Id} data={_component} mode={_mode}  />
            break; 
        case type.questionText : 
            newComponent =  <QuestionText key={_component.Id} data={_component} mode={_mode}   />
            break; 
        case type.sousTitre : 
            newComponent =  <SousTitre key={_component.Id} data={_component} mode={_mode}   />
            break; 
         case type.information : 
            newComponent =  <Information key={_component.Id} data={_component} mode={_mode}   />
            break; 
        case type.formBuilder : 
            newComponent =  <FormBuilder key={_component.Id} data={_component} mode={_mode}   />
            break; 
        default : 
            console.error(component.get('name') + ' ne correspond a aucun composant connu !')
        break
    }


    switch(_mode){
        case mode.edition: 
             return (
                <Edition key={'edition'+_component.Id} data={_component} >
                        {newComponent}
                </Edition>
            )
            break; 
        case mode.execution: 
             return newComponent; 
            break; 
        case mode.lecture: 
             return newComponent;
            break; 
    }


}

export default factory;  