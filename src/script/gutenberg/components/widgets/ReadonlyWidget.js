import {TextControl} from "@wordpress/components";

const NumberWidget = ({definition, value})=> {
    // TODO: value can be object with value and text than text is displayed
    return <TextControl
        label={definition.label}
        type="text"
        readOnly
    />
}

export default NumberWidget;