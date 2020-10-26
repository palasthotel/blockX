import {TextControl} from "@wordpress/components";

const PostWidget = ({definition, value, onChange})=> {
    
    return <TextControl
        label={definition.label}
        value={value}
        onChange={onChange}
        type="number"
    />
}

export default PostWidget;