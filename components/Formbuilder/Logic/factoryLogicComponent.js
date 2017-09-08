import React from 'react';
import { type } from '../config.js'
import Component from './Component.js'
import { typeContent, behavior, typeSetting } from '../config.js'



const factoryLogicComponent = (component, parent, mode) => {

    if (!component) {
        console.error('Aucun composant n\' a été envoyé à la factory');
        return undefined;
    }

    let newComponent = new Component(parent, mode);

    switch (component.type) {
        case type.formBuilder:
            // behavior 
            newComponent.Behavior = behavior.decorator
            newComponent.addChildrenAuthorize(type.questionnaire);
            newComponent.addChildrenAuthorize(type.texte);
            
            break;
        case type.questionnaire:

            // behavior 
            newComponent.Behavior = behavior.decorator

            // paramètre d'édition 
            newComponent.MergeAddTop = true;
            newComponent.MergeAddBottom = true;

            // type composant authorisé
            newComponent.addChildrenAuthorize(type.chapitre);
            break;
        case type.texte:

            // behavior 
            newComponent.Behavior = behavior.component

            // Ajout du content 
            newComponent.addContent({ name: 'texte', type: typeContent.text })

            break;
        case type.chapitre:

            // behavior 
            newComponent.Behavior = behavior.decorator

            // paramètre d'édition 
            newComponent.MergeAddBottom = true;

            // type composant authorisé

            newComponent.addChildrenAuthorize(type.questionBool);
            newComponent.addChildrenAuthorize(type.questionText);
            newComponent.addChildrenAuthorize(type.sousTitre);
            newComponent.addChildrenAuthorize(type.information);

            // Ajout du content 
            newComponent.addContent({ name: 'chapitre', type: typeContent.text })
            break;
        case type.sousTitre:
            // behavior 
            newComponent.Behavior = behavior.decorator

            // paramètre d'édition 
            newComponent.MergeAddBottom = true;

            // type composant authorisé
            newComponent.addChildrenAuthorize(type.questionBool);
            newComponent.addChildrenAuthorize(type.questionText);
            newComponent.addChildrenAuthorize(type.information);

            // Ajout du content 
            newComponent.addContent({ name: 'sousTitre', type: typeContent.text })

            break;
        case type.question:
            // behavior 
            newComponent.Behavior = behavior.component

            // Ajout du content 
            newComponent.addContent({ name: 'question', type: typeContent.text })
            newComponent.addContent({ name: 'reponse', type: typeContent.text })

            break;
        case type.questionBool:
            // behavior 
            newComponent.Behavior = behavior.component

            // Ajout du content 
            newComponent.addContent({ name: 'question', type: typeContent.text })

            // Ajout du Result
            newComponent.addResult({ name: 'boolean', type: typeContent.bool, constraint: { presence: true } });

            newComponent.Settings.addSetting({ type: typeSetting.notification })

            break;
        case type.questionText:
            // behavior 
            newComponent.Behavior = behavior.component

            // Ajout du content 
            newComponent.addContent({ name: 'question', type: typeContent.text })

            // Ajout du Result
            newComponent.addResult({ name: 'text', type: typeContent.textarea })
            break;
        case type.information:
            // behavior 
            newComponent.Behavior = behavior.component
            // Ajout du content 
            newComponent.addContent({ name: 'information', type: typeContent.text })

            break;
        default:
            console.error(component.get('name') + ' ne correspond a aucun composant connu !')
            break
    }

    return newComponent;
}

export default factoryLogicComponent; 