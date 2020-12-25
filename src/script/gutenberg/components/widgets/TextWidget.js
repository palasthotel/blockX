import {TextControl} from "@wordpress/components";

const TextWidget = ({definition, value, onChange})=> {
    return <TextControl
        label={definition.label}
        value={value}
        onChange={onChange}
    />
}

export default TextWidget;