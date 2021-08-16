import {useState} from "@wordpress/element";
import {useEscapeKey} from "../hooks/use-utils";
import './AutoCompleteTextControl.css';
import PopoverTextControl from "./PopoverTextControl";

const AutoCompleteTextControl = (
    {
        label,
        useCompletion,
        renderItem,
        messageSearching = "Searching...",
        messageNothingFound = "Nothing found.",
    }
) => {

    const [state, setState] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEscapeKey(() => {
        setIsVisible(false)
    }, [isVisible], isVisible);

    const [items, isResolving] = useCompletion(state);

    return <PopoverTextControl
        label={label}
        onChange={(value) => {
            setIsVisible(true);
            setState(value);
        }}
        onFocus={() => setIsVisible(true)}
        showPopover={isVisible}
        isLoading={isResolving}
    >
        {items.length > 0 ?
            items.map(item => renderItem(item))
            :
            <p className="blockx--auto-complete__no-results">
                {
                    isResolving ?
                        messageSearching : messageNothingFound
                }
            </p>
        }
    </PopoverTextControl>;
}

export default AutoCompleteTextControl;