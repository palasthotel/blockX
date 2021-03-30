import {TextareaControl, TextControl} from "@wordpress/components";

const TextWidget = ({definition, value, onChange})=> {

    if(typeof definition.rows !== 'number' || definition.rows === 1){
        return <TextControl
            label={definition.label}
            value={value}
            onChange={onChange}
            help={definition.help}
        />
    }

    return <TextareaControl
        label={definition.label}
        value={value}
        onChange={onChange}
        rows={definition.rows}
        help={definition.help}
    />
}

export default TextWidget;