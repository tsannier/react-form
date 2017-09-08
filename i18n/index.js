import en from './en_EN.js'
import fr from './fr_FR.js'

const langue  = ['fr_FR','en_EN'];

const translate =  (name) => {
    switch(name){
        case 'fr_FR' : 
            return fr; 
            break; 
        case 'en_EN' : 
            return en; 
            break; 
    }
}

export default translate; 
export {langue}