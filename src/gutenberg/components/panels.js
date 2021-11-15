import {Button, PanelBody} from "@wordpress/components";
import {useTranslation} from "../hooks/use-translation";
import ContentStructure from "./content-structure";
import {useBlock} from "../hooks/use-context";

const Panels = ({definition, content, setContent})=>{

    const {
        btn_apply_changes
    } = useTranslation();

    const {localChanges, changeLocalState} = useBlock()

    const applyChanges = ()=>{
        setContent({
            ...content,
            ...localChanges,
        })
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
            if(activePanel.contentStructure.length) {
                panels.push({...activePanel})
            }
            panels.push({
                label: item.label,
                opened: item.opened,
                contentStructure: item.contentStructure
            })
            activePanel.contentStructure = [];
            continue;
        }
        activePanel.contentStructure.push(item);


    }
    if(activePanel.contentStructure.length > 0 ) panels.push(activePanel);

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
                    ...localChanges
                }}
                savedState={content}
                onChange={(key, value)=>{
                    changeLocalState(key, value)
                }}
            />
        </PanelBody>
        )}
        <PanelBody>
            <Button 
                isSecondary
                disabled={Object.keys(localChanges).length === 0}
                onClick={handleApplyChangesClick}
            >
                {btn_apply_changes}
            </Button>
        </PanelBody>
    </>;
}

export default Panels;