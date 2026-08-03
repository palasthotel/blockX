import useSWR from 'swr'
import {useDebounce} from './use-utils.js'
import {useState} from "@wordpress/element";
import {fetchWidgetAjax} from "../data/ajax";
import {useBlock} from "./use-context";

const ajaxCache = {};
const ajaxFetcher = async ([widgetKeyFullPath, blockId, query]) => {

    // build url path
    const cacheKey = `${blockId}/${widgetKeyFullPath}?${query}`;
    if(typeof ajaxCache[cacheKey] === typeof []) return ajaxCache[cacheKey];

    // execute query and cache results
    const response = await fetchWidgetAjax(blockId, widgetKeyFullPath, {query});
    ajaxCache[cacheKey] = response;
    return response;
}

export const useAjax = (widgetKeyFullPath)=>{
    const {blockId} = useBlock();
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 600);

    const {data, error} = useSWR(
        query !== "" ? [ widgetKeyFullPath, blockId, debouncedQuery ] : null,
        ajaxFetcher
    );
    return {
        setQuery,
        results: data || [],
        isLoading: !error && !data && query !== "",
        isError: error,
    }
}

export const useFetchAjax = (query, widgetKeyFullPath) => {
    const {blockId} = useBlock();
    const debouncedQuery = useDebounce(query, 600);

    const {data, error} = useSWR([ widgetKeyFullPath, blockId, debouncedQuery ], ajaxFetcher);
    return {
        items: data || [],
        isLoading: !error && !data,
    }
}