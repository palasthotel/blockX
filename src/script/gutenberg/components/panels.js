import widgets from "./widgets";
import {Button, PanelBody} from "@wordpress/components";
import {useState} from "@wordpress/element";
import { useTranslation } from "../hooks/use-translation";
import ContentStructure from "./content-structure";

const Panels = ({definition, content, setContent})=>{

    const {
        btn_apply_changes
    } = useTranslation();

    const [state, _setState] = useState({});

    const setState = (key, value) => _setState(_state => ({
        ..._state,
        [key]: value,
    }))

    const applyChanges = ()=>{
        console.log("apply", state, "to", content)
        setContent({
            ...content,
            ...state,
        })
        _setState({});
    }

    const handleApplyChangesClick = ()=> applyChanges()

    // collect panels
    const panels = [];
    let activePanel = {
        label: undefined,
        opened: undefined,
        contentStructure: [],
    };
    for(const item of definition){
        if(item.type === "panel"){
            panels.push({...activePanel})
            panels.push({
                label: item.label,
                opened: item.opened,
                contentStructure: item.contentStructure
            })
            activePanel.contentStructure = [];
            continue;
        }
        activePanel.contentStructure.push(item)
    }
    if(activePanel.contentStructure.length > 0 ) panels.push(activePanel)

    return <>
        {panels.map((panel, panelIndex)=> <PanelBody
            key={panelIndex}
            title={panel.label}
            initialOpen={panel.opened}
        >
            <ContentStructure 
                items={panel.contentStructure}
                value={{
                    ...content,
                    ...state
                }}
                onChange={(key, value)=>{
                    console.log(key, value)
                    setState(key, value)
                }}
            />
        </PanelBody>
        )}
        <PanelBody>
            <Button 
                isSecondary
                disabled={Object.keys(state).length === 0}
                onClick={handleApplyChangesClick}
            >
                {btn_apply_changes}
            </Button>
        </PanelBody>
    </>;
}

export default Panels;