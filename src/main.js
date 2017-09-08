import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './style.scss'
import ReactDOM from 'react-dom';
import { mode } from '../components/Formbuilder/config.js'
import ComponentStore from "../components/Formbuilder/store/ComponentStore"
import Formbuilder from "../components/Formbuilder/"
import DevTools from 'mobx-react-devtools'
import RichEditor from '../components/Editor/RichEditor.js'
import { observer } from 'mobx-react'

import { translate } from "react-translate"
import { TranslatorProvider } from "react-translate"
import ressource, { langue } from "../i18n/index.js"

@translate("app")
@observer
class App extends React.Component {

    constructor(props) {
        super(props);
        this.sauvegardeExecutionHandler = this.sauvegardeExecutionHandler.bind(this)
        this.validationExecutionHandler = this.validationExecutionHandler.bind(this)
        this.sauvegardeEditionHandler = this.sauvegardeEditionHandler.bind(this)
        
    }

    validationExecutionHandler(event) {
        let result = undefined;

        if (this.props.store.validationForm())
            result = this.props.store.parseForm()

        this.props.callBackValidation({ result: result, information: this.props.information }, event);
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    sauvegardeExecutionHandler(event) {
        let result = result = this.props.store.parseForm()
        this.props.callBackSauvegarde({ result: result, information: this.props.information }, event);
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    sauvegardeEditionHandler(event) {
        let result = this.props.store.parseForm()
        this.props.callBackSauvegarde({ result: result, information: this.props.information }, event);
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }


    render() {

        const t = this.props.t;
        let button = null
        let validation = null;

        switch (this.props.store.Mode) {
            case "execution":
            validation = (<div className={s.validation} onClick={(event) => this.validationExecutionHandler(event)}>{t("valider")}</div>);
            button = (<div className={s.bouton} onClick={(event) => this.sauvegardeExecutionHandler(event)}>{t("sauvegarder")}</div>);
                break;
            case "edition":
                button = (<div className={s.bouton} onClick={(event) => this.sauvegardeEditionHandler(event)}>{t("sauvegarder")}</div>);
                break;
        }

        return (
            <div>
                <Formbuilder data={this.props.store} langue={langue} />              
                {this.props.hasSauvegarderButton && button}
                {validation}
            </div>
        );
    }
}


const configInit = {
    dom: null,
    mode: "execution",
    data: {},
    callBackSauvegarde: () => { },
    callBackValidation : () => {}, 
    hasSauvegarderButton : true, 
    information: {},
    langue: "fr_FR",
    callBackChangeLangue: () => { }
}

function formbuilderInit(config) {

    // configuration de formBuilder
    config = Object.assign(configInit, config);

    var store = new ComponentStore(config.data, config.mode, langue);

    ReactDOM.render(
        <TranslatorProvider translations={ressource(config.langue)}>
            <App store={store} information={config.information} callBackValidation={config.callBackValidation} hasSauvegarderButton={config.hasSauvegarderButton} callBackSauvegarde={config.callBackSauvegarde} />
        </TranslatorProvider>
        , config.dom);
    return store;
}

exports.module = formbuilderInit;


var data =  {"__type":"CarnetDeMission.App.Form.Component","id":1,"type":"FORMBUILDER","children":[{"__type":"CarnetDeMission.App.Form.Component","id":2,"type":"QUESTIONNAIRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":3,"type":"CHAPITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":4,"type":"SOUSTITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":5,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que le risque de corruption dans le pays où la prestation doit être effectuée est élevé selon Transparency International (indice de perception de la corruption inférieur ou égal à 40)? cf. http://www.transparency.org/cpi2015/results","name":"question"}],"result":[]}],"content":[{"value":"Pays","name":"sousTitre"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":6,"type":"SOUSTITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":7,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que le partenaire a été recommandé par le client ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":8,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce qu’il nous a été demandé, dans le cadre du contrat projeté, de faire une contribution politique ou caritative ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":9,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que le partenaire a adopté une démarche éthique (ex : charte éthique) ou bien savez-vous si sa réputation est bonne dans ce domaine?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":10,"type":"QUESTIONBOOL","children":[],"content":[{"value":"A votre connaissance, est-ce que le partenaire a des liens familiaux ou d'affaires avec des agents publics concernés par le projet?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":11,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que les compétences techniques du partenaire ont été jugées adaptées (à partir de ses références notamment)?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":12,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que la santé financière du partenaire est jugée suffisante pour mener à bien la mission?","name":"question"}],"result":[]}],"content":[{"value":"Sélection du partenaire","name":"sousTitre"}],"result":[]}],"content":[{"value":"Identification des profils de risque","name":"chapitre"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":13,"type":"CHAPITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":14,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que le montant de la prestation semble surévalué par rapport au prix du marché?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":15,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que le partenaire exige des paiements inhabituels (commissions élevées, primes substantielles, etc.) ou une rémunération basée sur l’obtention de marchés (“success fees”)?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":16,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Est-ce que des modalités particulières de paiement sont réclamées telles que:","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":17,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Des paiements vers des comptes bancaires dans un pays autre que celui où les prestations sont réalisées ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":18,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Des paiements vers des comptes bancaires anonymes ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":19,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Des paiements vers des comptes bancaires détenus par des personnes physiques ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":20,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Des paiements à des personnes n’ayant pas réalisé la prestation ?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":21,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Des paiements en espèces au lieu de chèques ou de virements bancaires ?","name":"question"}],"result":[]}],"content":[{"value":"Rémunération et modalités de paiement","name":"chapitre"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":22,"type":"CHAPITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":23,"type":"QUESTIONTEXTE","children":[],"content":[{"value":"Profils de risque identifiés","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":24,"type":"QUESTIONTEXTE","children":[],"content":[{"value":"Commentaires","name":"question"}],"result":[]}],"content":[{"value":"Identification des mesures proposées pour réduire le risque","name":"chapitre"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":25,"type":"CHAPITRE","children":[{"__type":"CarnetDeMission.App.Form.Component","id":26,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Sur la base des informations recueillies, pensez-vous que le risque peut être maîtrisé?","name":"question"}],"result":[]},{"__type":"CarnetDeMission.App.Form.Component","id":27,"type":"QUESTIONBOOL","children":[],"content":[{"value":"Sur la base de cette analyse, recommanderiez-vous de faire appel à ce partenaire/tiers ?","name":"question"}],"result":[]}],"content":[{"value":"Conclusion","name":"chapitre"}],"result":[]}],"content":[],"result":[]}],"content":[],"result":[]}


let sauvegarde = (data, event) => { console.log(data) }
let validation = (data, event) => { console.log(data) }

let form = formbuilderInit(
    {
        dom: document.getElementById("container"),
        data: data,
        mode: "edition",
        langue: "en_EN",
        callBackSauvegarde: sauvegarde,
        callBackValidation : validation, 
        information: { id: 5 }, 
        hasSauvegarderButton : true
    }
);

