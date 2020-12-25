import { ToggleControl} from "@wordpress/components";

const getStateLabel = (label, isOn)=>{
    return typeof label === typeof {} ? (isOn ? label.on : label.off) : typeof label === typeof "" ? label : null;
}

const ToggleWidget = ({definition, value, onChange})=> {
    const {
        label,
        help,
    } = definition;
    
    return <ToggleControl
        label={getStateLabel(label, value)}
        help={getStateLabel(help, value)}
        checked={value}
        onChange={onChange}
    />
}

export default ToggleWidget;