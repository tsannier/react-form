import React from 'react';
import { typeSetting, typeContent } from '../config.js'
import {Setting} from './Settings.js'
import Parameter from './Result.js'
import  uuidv4 from 'uuid/v4'


const factorySetting = (setting,component) => {

    let newSetting = new Setting(component);  
    newSetting.Require = (setting.hasOwnProperty('require'))? setting.require : newSetting.Require; 

    switch (setting.type) {
        case typeSetting.notification:

        const destinataireParameter = new Parameter(newSetting.component); 
        destinataireParameter.Id = uuidv4(); 
        destinataireParameter.Label = "Destinataires";
        destinataireParameter.Type = typeContent.autoComplete; 
        
        const frequenceParameter = new Parameter(newSetting.component); 
        frequenceParameter.Id = uuidv4(); 
        frequenceParameter.Type = typeContent.select; 
        frequenceParameter.Label = "Fréquence "; 
        frequenceParameter.options.set("hebdomadaire","Hebdomadaire")
        frequenceParameter.options.set("manager","Envoie au Manager")



        const statusParameter = new Parameter(newSetting.component); 
        statusParameter.Id = uuidv4(); 
        statusParameter.Type = typeContent.multiSelect; 
        statusParameter.Label = "Statut du projet"
        statusParameter.options.set("devis","Devis")
        statusParameter.options.set("affaire","Affaire")


        newSetting.addParameter(destinataireParameter); 
        newSetting.addParameter(frequenceParameter); 
        newSetting.addParameter(statusParameter); 

        newSetting.Type = typeSetting.notification; 
        newSetting.Libelle = "Notification"
        newSetting.Require = false; 


            break;
        case typeSetting.require:
                newSetting.Type = typeSetting.require; 
                newSetting.Libelle = "REQUIRE"
            break;
        case typeSetting.nonRequire:
                newSetting.Type = typeSetting.nonRequire; 
                newSetting.Libelle = "Non require"
            break;
        default:
            console.error('Aucun seting  ne correspond')
            break
    }

    return newSetting;
}

export default factorySetting; 