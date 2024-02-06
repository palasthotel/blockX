import React from "react";
import AutoCompleteTextControl from "../AutoCompleteTextControl";
import LockedTextControl from "../LockedTextControl";
import {useAjaxCompletionFactory} from "../../hooks/use-completion";
import './AutoCompleteWidget.css';
import {useFetchAjax} from "../../hooks/use-ajax";

const SearchResult = ({value, label, onClick}) => {
    return (
        <div
            className="blockx-auto-complete__suggestion"
            onClick={onClick}
        >
            {label}<br/>
            <i className="description">{value}</i>
        </div>
    )
}

const Search = ({label, widgetKeyFullPath, onFound})=> {
    const useCompletion = useAjaxCompletionFactory(widgetKeyFullPath);

    return <AutoCompleteTextControl
        label={label}
        useCompletion={useCompletion}
        renderItem={(item) => {
            return <SearchResult
                key={item.value}
                {...item}
                onClick={()=>onFound(item.value)}
            />
        }}
        messageNothingFound={"Nothing found."}
    />;
}

const LockedCompletedItem = ({label, value, onUnlock, widgetKeyFullPath})=> {

    const {items} = useFetchAjax(value, widgetKeyFullPath);

    const displayValue = items.length > 0 ? items[0].label : value;

    return <LockedTextControl
        label={label}
        value={displayValue}
        onUnlock={onUnlock}
    />
}

export default function AutoCompleteWidget(
    {
        definition,
        value,
        onChange,
    }
){

    const {
        label,
        key,
        parentPath,
    } = definition;

    if(!value){
        return (
            <Search
                label={label}
                widgetKeyFullPath={`${parentPath}${key}`}
                onFound={onChange}
            />
        )
    }

    return (
        <LockedCompletedItem
            widgetKeyFullPath={`${parentPath}${key}`}
            label={label}
            value={value}
            onUnlock={()=> onChange("")}
        />
    )
}