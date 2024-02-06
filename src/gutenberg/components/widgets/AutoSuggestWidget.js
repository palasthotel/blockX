import AutoSuggestTextControl from "../AutoSuggestTextControl";
import {useAjax} from "../../hooks/use-ajax";
import {useEffect} from "@wordpress/element";
import './AutoSuggestWidget.css';

const AutoSuggestWidget = (
    {
        definition,
        value,
        savedState,
        onChange,
        renderItem,
    }
) => {

    const {label, key, parentPath} = definition;
    const {
        setQuery,
        results,
        isLoading,
    } = useAjax(`${parentPath}${key}`);

    useEffect(()=>{
        if(typeof value === "string" && value !== "" && value !== savedState){
            setQuery(value);
        }
    }, [value, savedState]);

    const _renderItem = typeof renderItem === "function" ? renderItem : (item, closePopover) => {
        return <div
            key={item.value}
            onClick={()=>{
                onChange(item.value);
                closePopover();
            }}
            className="blockx-auto-suggest__suggestion"
        >
            {item.value}
        </div>
    }

    return <AutoSuggestTextControl
        label={label}
        value={value}
        items={results}
        isLoading={isLoading}
        onChange={onChange}
        renderItem={_renderItem}
    />;
}

export default AutoSuggestWidget;