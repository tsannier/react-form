import React from 'react';
import { observable, computed, action } from 'mobx';
import { type, mode, behavior } from '../config.js'
import Content from './Content.js'
import Result from './Result.js'
import Settings from './Settings.js'


class Component {

    @observable id = 0;
    @observable _mode = mode.execution;
    @observable type = type.questionnaire;
    @observable _deep = 0;
    @observable currentLangue = "";
    @observable _langue = observable.array();
    @observable _settings = new Settings(this);
    @observable _libelle = null
    @observable _behavior = behavior.component;
    @observable children = observable.array();
    @observable _childrenAuthorize = []
    @observable _content = observable.array();
    @observable _result = []
    @observable _canDrag = true

    constructor(parent, mode) {

        this.parent = (parent) ? parent : null;
        this._mode = mode;
    }

    get Id() {
        return this.id;
    }
    set Id(_id) {
        this.id = _id;
    }

    get Type() {
        return this.type;
    }

    set Type(_type) {
        this.type = _type;
    }

    get Libelle() {
        if (this._libelle == null)
            return this.type;
        else
            return this._libelle;
    }

    set Libelle(_libelle) {
        this._libelle = _libelle;
    }

    get Behavior() {
        return this._behavior;
    }

    set Behavior(_behavior) {
        this._behavior = _behavior;
    }

    get Parent() {
        return this.parent;
    }

    set Parent(parent) {
        return this.parent = parent;
    }

    set Langue(_langue) {
        this._langue = _langue;
    }

    get Langue() {
        return this._langue;
    }

    set CurrentLangue(_currentLangue) {
        this._currentLangue = _currentLangue;
    }

    get CurrentLangue() {
        return this._currentLangue;
    }



    get Settings() {
        return this._settings;
    }

    @computed get CanDrag() {
        return this._canDrag;
    }

    set CanDrag(_canDrag) {
        this._canDrag = _canDrag;
    }


    @computed get Children() {
        return this.children;
    }

    set Children(_children) {
        this.children = _children;
    }

    @computed get Mode() {
        return this._mode

    }

    set Mode(_mode) {
        this._mode = _mode;
        this.children.forEach((child) => {
            let childParse = child.Mode = _mode;
        })
    }

    Child(id) {
        return this.children.find(child => child.id == id)
    }

    get ChildrenAuthorize() {
        return this._childrenAuthorize;
    }

    Content(name) {
        return this._content.find(r => r.Name === name);
    }

    get Deep() {
        return this._deep
    }

    set Deep(_deep) {
        this._deep = _deep
    }


    get Position() {
        if (this.Parent == null) {
            return 0;
        }
        else {
            return this.Parent.Children.findIndex((child, index) => child == this)
        }
    }


    addContent(content) {
        let newContent = new Content(this);
        newContent.Type = content.type;
        newContent.Name = content.name;
        newContent._langue = this._langue;
        newContent.currentLangue = this._currentLangue;
        this._content.push(newContent);
    }

    Result(name) {
        return this._result.find(r => r.Name === name);
    }

    addResult(result) {
        let newResult = new Result(this);
        newResult.Type = result.type;
        newResult.Name = result.name;
        newResult.Constraint = (result.constraint) ? result.constraint : {};
        this._result.push(newResult);
    }

    @action addChildren(component, position = null) {
        component.Langue = this._langue;
        component.CurrentLangue = this._currentLangue;
        if (position == null) {
            this.children.push(component);
        }
        else {
            this.children.splice(position, 0, component);
        }
    }

    @action deleteChildren() {
        this.parent.Children.remove(this)
    }

    @action moveComponent(component,position) {
        component.deleteChildren();
        component.Parent = this
        this.addChildren(component, position)
    }

    addChildrenAuthorize(type) {
        this._childrenAuthorize.push(type)
    }

    getRacine() {
        let component = this;
        let parent = component.parent;
        while (parent != null) {
            component = parent;
            parent = component.parent;
        }
        return component;
    }




    parseExecutionComponent() {
        let parse = [];

        let result = this._result.map(function (r) {return { name: r.Name,value: (r.IsValide)?r.value : null }; })
        if (result.length > 0) parse.push({ id: this.Id, result: result })
        this.children.forEach((child) => {
            let childParse = child.parseComponent();
            if (childParse.length > 0) parse = [...parse, ...childParse]
        })
        return parse;
    }

    parseEditionComponent() {
        let component = {
            id: this.Id,
            type: this.Type,
            content: [],
            result: [],
            children: []
        }

        component.result = this._result.map(function (r) { return { name: r.Name, value: r.value }; })
        component.content = this._content.map(function (r) { return { name: r.Name, value: r.value }; })

        this.children.forEach((child) => {
            component.children.push(child.parseEditionComponent());
        })

        return component;
    }

    parseComponent() {
        switch (this.Mode) {
            case mode.execution:
            case mode.lecture:
                 return this.parseExecutionComponent();
                break;
            case mode.edition:
                return this.parseEditionComponent();
                break;
            default:
                return null;
                break;
        }
    }
    



    @action validationComponent() {
        let valide = true;
        this._result.forEach((r) => { if (r.validation() == false) valide = false; });
        this.children.forEach((child) => {
            if (child.validationComponent() == false) valide = false;
        });
        return valide;
    }

    @action canDrop(component) {
        if (this.ChildrenAuthorize.find(
            (authorize) => authorize == component.Type) != undefined)
            return true
        else return false;
    }


}


export default Component;