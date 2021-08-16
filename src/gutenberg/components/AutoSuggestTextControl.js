import {useState} from "@wordpress/element";
import {useEscapeKey} from "../hooks/use-utils";
import './AutoCompleteTextControl.css';
import PopoverTextControl from "./PopoverTextControl";

const AutoSuggestTextControl = (
    {
        label,
        value,
        isLoading,
        items,
        onChange,
        renderItem,
    }
) => {

    const [isVisible, setIsVisible] = useState(false);

    useEscapeKey(() => {
        setIsVisible(false);
    }, [isVisible], isVisible);

    return <PopoverTextControl
        label={label}
        value={value}
        onChange={onChange}
        onFocus={() => setIsVisible(true)}
        showPopover={items.length > 0 && isVisible}
        isLoading={isLoading}
    >
        {items.map(item => renderItem(item, ()=> setIsVisible(false)))}
    </PopoverTextControl>;
}

export default AutoSuggestTextControl;