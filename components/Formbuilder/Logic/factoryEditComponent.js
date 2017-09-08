import React from 'react';
import { typeContent } from '../config.js'
import { Checkbox, Bool, Textarea, Text, Select } from '../components/EditComponents/'


const factoryEditComponent = (content, mode) => {


    if (!content && !content.Type) {
        console.error('Aucun edit composant n\' a été envoyé à la factory');
        return null;
    }

    let newComponent = null;

    switch (content.Type) {
        case typeContent.checkbox:
            newComponent = <Checkbox key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.bool:
            newComponent = <Bool key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.text:
            newComponent = <Text key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.textarea:
            newComponent = <Textarea key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.select:
            newComponent = <Select key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.multiSelect:
            content.Multi = true
            newComponent = <Select key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        case typeContent.autoComplete:
            newComponent = <Select key={content.component.Id} id={content.component.Id} mode={mode} content={content} />
            break;
        default:
            console.error(component.get('name') + ' ne correspond a aucun composant connu !')
            break
    }

    return newComponent;
}

export default factoryEditComponent; 