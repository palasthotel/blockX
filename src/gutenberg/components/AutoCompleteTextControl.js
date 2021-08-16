import {useState} from "@wordpress/element";
import {useEscapeKey} from "../hooks/use-utils";
import {BaseControl, Popover, Spinner, TextControl} from "@wordpress/components";
import './AutoCompleteTextControl.css';

const AutoCompleteTextControl = ({label, useCompletion, renderItem})=>{

    const [state, setState] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEscapeKey(()=>{
        setIsVisible(false)
    }, [isVisible], isVisible);

    const [items, isResolving] = useCompletion(state);

    return <BaseControl className="blockx--auto-complete">
        <div className="blockx--auto-complete__input-wrapper">
            <TextControl
                label={label}
                value={state}
                onChange={(value)=>{
                    setIsVisible(true);
                    setState(value);
                }}
                onFocus={()=>setIsVisible(true)}
            />
            {isResolving && (<span
                className="blockx--search-post__spinner-wrapper"
            ><Spinner/></span>)}
        </div>

        { isVisible ? (
            <Popover
                focusOnMount={false}
                position="bottom center"
            >
                <div className="blockx--auto-complete__popover">

                    {items.length > 0 ?
                        items.map(item=> renderItem(item))
                        :
                        <p className="blockx--auto-complete__no-results">{isResolving ? "Searching..." : "Nothing found."}</p>
                    }
                </div>
            </Popover>
        ) : null}
    </BaseControl>
}

export default AutoCompleteTextControl;