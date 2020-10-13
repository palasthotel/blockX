import { ToggleControl} from "@wordpress/components";

const ToggleWidget = ({definition, value, onChange})=> {
    const {
        label,
        help,
    } = definition;
    const _label = typeof label === typeof {} ? (value ? label.on : label.off) : label;
    const _help = help ? (value ? help.on : help.off) : null;
    
    return <ToggleControl
        label={_label}
        help={_help}
        checked={value}
        onChange={onChange}
    />
}

export default ToggleWidget;