import { STORE_NAME } from "../data/store.js";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

const useSelectStore = (selector, deps = []) => useSelect(select=> selector(select(STORE_NAME)), deps);
const useStoreDispatch = () => useDispatch(STORE_NAME);

export const useIsRequesting = ()=>{
    return useSelectStore(state=> state.isRequesting(), []);
}

export const useIsInRenderQueue = (blockId, attributes)=>{
    return useSelectStore(state => state.isInQueue(blockId, attributes), [blockId, attributes]);
}

export const useIsRequestingBlock = (blockId, attributes)=>{
    return useSelectStore(state => state.isRequesting(blockId, attributes), [blockId, attributes])
}

export const useSSR = (blockId, attributes)=>{
    const html = useSelectStore(state => state.getBlock(blockId, attributes), [blockId, attributes]);
    const dispatch = useStoreDispatch();
    useEffect(()=>{
        dispatch.addToQueue(blockId, attributes);
    }, [blockId, JSON.stringify(attributes)]);
    return html;
}