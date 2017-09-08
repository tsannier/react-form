const type = {
    questionnaire : 'QUESTIONNAIRE',
    question : 'QUESTION',
    chapitre : 'CHAPITRE',
    sousTitre : 'SOUSTITRE', 
    questionBool : 'QUESTIONBOOL',
    questionText : 'QUESTIONTEXTE',
    formBuilder : 'FORMBUILDER',
    information : 'INFORMATION',
    texte : 'TEXTE'
}

const libelle = (_type) => {
    switch(_type){
        case type.information : 
        return "Information"; 
        break;
        case type.questionnaire : 
            return "Questionnaire"; 
            break;
        case type.question : 
             return "Question"; 
            break;
        case type.chapitre : 
            return "Chapitre"
            break;
        case type.sousTitre : 
            return "Sous-Titre"
            break;
        case type.questionBool : 
            return "Question (oui/non)"
            break;
        case type.questionText : 
            return "Question texte"
            break;
        case type.formBuilder : 
            return "Formulaire"
            break;
        case type.texte : 
            return "Texte"
            break;
        default : 
            return "Aucun libelle";
            break; 
    }
}

const typeContent = {
    text : 'text',
    textarea : 'textarea', 
    input : 'input',
    bool : 'bool',
    select : 'select',
    multiSelect : 'multiSelect',
    autoComplete : 'autoComplete'
}

const typeSetting = {
    notification : 'NOTIFICATION',
    require : 'REQUIRE',
    nonRequire : "NONREQUIRE"
}

const mode = {
    lecture : 'lecture', 
    execution : 'execution',
    edition : 'edition', 
}

const behavior = {
    decorator : "decorator", 
    component : "component"
}

export  {type, typeContent,typeSetting, mode, behavior,libelle}; 