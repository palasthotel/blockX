import {TextControl} from "@wordpress/components";

const NumberWidget = ({definition, value, onChange})=> {
    return <TextControl
        label={definition.label}
        value={value}
        onChange={onChange}
        type="number"
    />
}

export default NumberWidget;