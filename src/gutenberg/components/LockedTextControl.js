import {BaseControl, Icon, TextControl} from "@wordpress/components";
import './LockedTextControl.css';


const LockedTextControl = ({label, value, onUnlock})=>{
    return <BaseControl
        className="blockx--locked-text-control"
    >
        <TextControl
            label={label}
            value={value}
            readOnly={true}
        />
        <span className="blockx--locked-text-control__icon" onClick={onUnlock} >
            <Icon icon="no" />
        </span>
    </BaseControl>
}

export default LockedTextControl;