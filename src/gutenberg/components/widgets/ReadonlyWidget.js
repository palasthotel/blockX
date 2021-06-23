import {TextControl} from "@wordpress/components";

const ReadonlyWidget = ({definition, value})=> {
    return <TextControl
        label={definition.label}
        type="text"
        readOnly
        value={value}
    />
}

export default ReadonlyWidget;