import {TextControl} from "@wordpress/components";
import {useCallback} from "@wordpress/element";

const NumberWidget = ({definition, value, onChange})=> {

    const handleChange = useCallback((value)=>{
        if(value && definition.max && value > definition.max){
            return;
        }
        if(value && definition.min && value < definition.min){
            return;
        }
        onChange(value);
    }, [definition.max, definition.min]);

    return <TextControl
        label={definition.label}
        value={value}
        onChange={handleChange}
        type="number"
        help={definition.help}
    />
}

export default NumberWidget;