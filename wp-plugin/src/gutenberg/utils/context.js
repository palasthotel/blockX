
const Contexts = {};

const getContext = (name, initValue = "")=>{
    if(typeof Contexts[name] === typeof undefined){ 
        Contexts[name] = React.createContext(initValue);
    }
    return Contexts[name];
}

export const getBlockContext = ()=> getContext("block");