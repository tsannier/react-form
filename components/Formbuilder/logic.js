import React from 'react';
import factory from './factory.js'
import {mode, behavior} from './config.js'
import  EditionAddComponent from './Components/Edition/EditionAddComponent.js'
import  ButtonAddComponent from './Components/Edition/ButtonAddComponent.js'
import  uuidv4 from 'uuid/v4'
 


const renderChild = (child,mode,) => {
     return factory(child,mode); 
}

const renderChildren = (_parent,_mode) => {

    let _children = _parent.Children; 
    let render = []

    if(_children){
        _children.forEach( (_child,index) => { 
            switch(_mode){
                case mode.edition : 
                render.push(
                         <div  key={uuidv4()}> 
                            <EditionAddComponent key={uuidv4()} parent={_parent} mode={_mode} position={index}/>
                            {factory(_child,_mode)}
                         </div>
                        )
                    break; 
                case mode.execution : 
                     return render.push(factory(_child,_mode))
                    break; 
                case mode.lecture : 
                     return render.push(factory(_child,_mode))
                    break; 
            }
        }); 
   
        if(_mode == mode.edition && _parent.Behavior == behavior.decorator && render.length == 0)
            render.push(<ButtonAddComponent  key={uuidv4()} parent={_parent} mode={_mode}  />);
        else if(_mode == mode.edition && render.length > 0 
            && _parent.Behavior == behavior.decorator){
                render.push(<EditionAddComponent  key={uuidv4()} parent={_parent} mode={_mode}  position={render.length} />);
            }
        return render; 
    }
    else
        return undefined
}

const renderComponent = (component,mode) => {
    return factory(component,mode); 
}

export {renderChild, renderChildren, renderComponent}; 
