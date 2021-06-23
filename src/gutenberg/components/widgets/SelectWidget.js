import {SelectControl} from "@wordpress/components";

const SelectWidget = ({definition, value, onChange})=> {

    const {
        label,
        options,
    } = definition;

    return <SelectControl
        label={label}
        value={value}
        onChange={onChange}
        options={options}
        multiple={definition.multiple}
    />
}

export default SelectWidget;