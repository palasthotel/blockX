import widgets from "./widgets";
import {Button} from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";
import { useTranslation } from "../hooks/useTranslation";

const ContentStructure = ({definition, content, setContent})=>{

    const {
        btn_apply_changes
    } = useTranslation();
    const [state, setState] = useState({});

    const setValue = (key, value) => setState(_state => ({
        ..._state,
        [key]: value,
    }))

    const applyChanges = ()=>{
        setContent({
            ...content,
            ...state,
        })
        setState({});
    }

    const handleApplyChangesClick = ()=> applyChanges()

    return <>
        {definition.map(item=>{
            if(typeof widgets[item.type] !== typeof undefined){
                const Widget = widgets[item.type];

                const value = typeof state[item.key] !== typeof undefined ? state[item.key] : 
                                typeof content[item.key] !== typeof undefined ? content[item.key] 
                                : item.defaultValue

                return <Widget
                    key={item.key}
                    definition={item}
                    value={value}
                    onChange={(value, applyImmediately = false) => {
                        if(applyImmediately){
                            setContent({
                                ...content,
                                [item.key]: value,
                            })
                        } else {
                            setValue(item.key, value)
                        }
                        
                    }}
                />
            }
            return <p key={item.key}>Type <b>{item.type}</b> not implemented</p>
        })}
        <Button 
            isSecondary
            disabled={Object.keys(state).length === 0}
            onClick={handleApplyChangesClick}
        >
            {btn_apply_changes}
        </Button>
    </>;
}

export default ContentStructure;