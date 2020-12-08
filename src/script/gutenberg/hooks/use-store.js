import { STORE_NAME } from "../data/store.js";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

const useSelectStore = (selector, deps = []) => useSelect(select=> selector(select(STORE_NAME)), deps);
const useStoreDispatch = () => useDispatch(STORE_NAME);

export const useIsRequesting = ()=>{
    return useSelectStore(state=> state.isRequesting(), []);
}

export const useIsInRenderQueue = (blockId, blockContent)=>{
    return useSelectStore(state => state.isInQueue(blockId, blockContent), [blockId, blockContent]);
}

export const useIsRequestingBlock = (blockId, blockContent)=>{
    return useSelectStore(state => state.isRequesting(blockId, blockContent), [blockId, blockContent])
}

export const useSSR = (blockId, blockContent)=>{
    const html = useSelectStore(state => state.getBlock(blockId, blockContent), [blockId, blockContent]);
    const dispatch = useStoreDispatch();
    useEffect(()=>{
        dispatch.addToQueue(blockId, blockContent);
    }, [blockId, blockContent]);
    return html;
}