import widgets from "./widgets";

const ContentStructure = ({items, value, savedState = {}, onChange, parentPath = ""})=>{

    return items.map((item, index)=>{

        const widget = typeof widgets[item.type] !== "undefined" ?
            widgets[item.type]
            :
            window.BlockXComponents.widgets[item.type];

        if(typeof widget !== typeof undefined){
            const Widget = widget;
            const _value = typeof value[item.key] !== typeof undefined ? value[item.key] : item.defaultValue
            const _savedState = typeof savedState[item.key] !== typeof undefined ? savedState[item.key] : undefined;
            return <Widget
                key={`${index}-${item.key}`}
                definition={{
                    ...item,
                    parentPath,
                }}
                value={_value}
                savedState={_savedState}
                onChange={(_value) => onChange(item.key, _value)}
            />
        }
        return <p key={item.key}>Type <b>{item.type}</b> not implemented</p>
    });
}

export default ContentStructure;