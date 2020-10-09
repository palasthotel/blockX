import widgets from "./widgets";
import {Button, PanelRow} from "@wordpress/components";
import {useEffect} from "@wordpress/element";

const ContentStructure = ({definition, content, setContent, autoSetDefaults = false})=>{

    useEffect(()=>{
        if(autoSetDefaults && Object.keys(content).length < definition.length){
            console.log("auto set default values")
            const newContent = {};
            for (const {defaultValue, key} of definition) {

                if(typeof content[key] === typeof undefined){
                    newContent[key] = defaultValue;
                } else {
                    newContent[key] = content[key];
                }
            }
            setContent(newContent)
        }
    }, [definition])

    const setValue = (key, value) => setContent({
        ...content,
        [key]: value,
    })

    return <>
        {definition.map(item=>{
            if(typeof widgets[item.type] !== typeof undefined){
                const Widget = widgets[item.type];
                return <PanelRow key={item.key}>
                    <Widget
                        definition={item}
                        value={content[item.key] || item.defaultValue}
                        onChange={(value) => setValue(item.key, value)}
                    />
                </PanelRow>
            }
            return <p key={item.key}>Type <b>{item.type}</b> not implemented</p>
        })}
        <Button isSecondary>Apply changes</Button>
    </>;
}

export default ContentStructure;