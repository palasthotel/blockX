import {SelectControl} from "@wordpress/components";

const SelectWidget = ({definition, value, onChange})=> {
    return <SelectControl
        label={definition.label}
        value={value}
        onChange={onChange}
        options={definition.options}
    />
}

export default SelectWidget;