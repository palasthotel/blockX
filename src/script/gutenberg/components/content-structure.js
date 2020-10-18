import widgets from "./widgets";

const ContentStructure = ({items, value, onChange})=>{

    return items.map(item=>{
        if(typeof widgets[item.type] !== typeof undefined){
            const Widget = widgets[item.type];
            const _value = typeof value[item.key] !== typeof undefined ? value[item.key] : item.defaultValue
            return <Widget
                key={item.key}
                definition={item}
                value={_value}
                onChange={(_value) => onChange(item.key, _value)}
            />
        }
        return <p key={item.key}>Type <b>{item.type}</b> not implemented</p>
    });
}

export default ContentStructure;