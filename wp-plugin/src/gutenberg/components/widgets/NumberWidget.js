import {TextControl} from "@wordpress/components";

const NumberWidget = ({definition, value, onChange})=> {

    const handleChange = (value)=>{
        if(value === "" && definition.min){
            onChange(definition.min);
            return;
        }
        if(value && definition.max && value > definition.max){
            onChange(definition.max);
            return;
        }
        if(value && definition.min && value < definition.min){
            onChange(definition.min);
            return;
        }
        onChange(value);
    };

    return <TextControl
        label={definition.label}
        value={value}
        onChange={handleChange}
        type="number"
        help={definition.help}
    />
}

export default NumberWidget;
