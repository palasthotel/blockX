import apiFetch from "@wordpress/api-fetch";
import {register, createReduxStore, select} from "@wordpress/data";

// ---------------------------------------------
// caching
// ---------------------------------------------
const SSR_CACHE_KEY = "blockx-ssr-cache";
const SSR_CACHE_TIMESTAMPS_KEY = "blockx-ssr-cache-timestamps";

const getExpiredCache = ()=>{
    return JSON.parse(localStorage.getItem(SSR_CACHE_TIMESTAMPS_KEY) || "{}")
}
const setExpiredCache = (map) => {
    return localStorage.setItem(SSR_CACHE_TIMESTAMPS_KEY,  JSON.stringify(map));
}
const setCache = (blocks, expiresInSeconds = 300) => {
    const map = getExpiredCache();
    const now = Date.now();
    for(const hash in blocks){
        map[hash] = now + 1000 * expiresInSeconds;
    }
    setExpiredCache(map);
    localStorage.setItem(SSR_CACHE_KEY, JSON.stringify(blocks));
}
const getCache = () => {
    return JSON.parse(localStorage.getItem(SSR_CACHE_KEY) || "{}");
}

// cleanup expired caches
const expiredMap = getExpiredCache();
const now = Date.now();
for(const hash in expiredMap) {
    if(expiredMap[hash] < now){
        delete expiredMap[hash];
    }
    setExpiredCache(expiredMap);
}

const validHashes = Object.keys(expiredMap);
const blocksCache = getCache();
for(const hash in blocksCache) {
    if(!validHashes.includes(hash)){
        delete blocksCache[hash];
    }
}
setCache(blocksCache);

// ---------------------------------------------
// default store state
// ---------------------------------------------
const getHash = (blockId, attributes) => {
    // unescape and encode needed for hash function to work
    return btoa(`${blockId}-${unescape(encodeURIComponent(JSON.stringify(attributes)))}`);
};

const DEFAULT_STATE = {
    isRequesting: false,
    blocks: getCache(),
    queue: {},
};

// ---------------------------------------------
// api actions
// ---------------------------------------------
const SSR_FETCH = (post_id, blocks)=>({
    type: 'SSR_FETCH',
    path: `/blockx/v1/ssr`,
    data: { 
        post_id,
        blocks 
    }
});

// ---------------------------------------------
// action generators
// ---------------------------------------------
const actionNone = ()=> ({type:'none'})
const ACTION_SET_IS_REQUESTING = 'SET_IS_REQUESTING';
const actionIsRequesting = (isRequesting) => ({type: ACTION_SET_IS_REQUESTING, isRequesting});
const ACTION_ADD_TO_QUEUE = "ADD_TO_QUEUE";
const actionAddToQueue = (hash, block) => ({type: ACTION_ADD_TO_QUEUE, hash, block});
const ACTION_REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";
const actionRemoveFromQueue = (hashes) => ({type: ACTION_REMOVE_FROM_QUEUE, hashes});
const ACTION_SET_BLOCKS = 'SET_BLOCKS';
const actionSetBlocks = (renderedBlocks) => ({type: ACTION_SET_BLOCKS, blocks: renderedBlocks});

// ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------
const actions = {
    
    addToQueue: (blockId, attributes)=>{
        const block = {
            id: blockId,
            attributes,
        };
        return actionAddToQueue(getHash(blockId, attributes), block);
    },

    * fetchSSR(post_id){

        // check queue
        const queue = select(STORE_NAME).getQueueMap();
        if(Object.keys(queue).length < 1){
            return actionNone();
        }

        // fetch blocks from queue
        yield actionIsRequesting(true);
        const result = yield SSR_FETCH(post_id, queue);
        yield actionSetBlocks(result);
        
        // remove fetched blocks from queue
        yield actionRemoveFromQueue(Object.keys(queue));

        return actionIsRequesting(false);
    },
}

// ------------------------------------------------------
// register our custom store
// ------------------------------------------------------
export const STORE_NAME = 'block-x';
const store = createReduxStore(STORE_NAME, {
    // ------------------------------------------------------
    // reduce actions to new state
    // ------------------------------------------------------
    reducer( state = DEFAULT_STATE, action  ) {
        switch ( action.type ) {
            case ACTION_SET_IS_REQUESTING:
                return {
                    ...state,
                    isRequesting: action.isRequesting,
                }
            case ACTION_SET_BLOCKS:
                const blocks = {
                    ...state.blocks,
                    ...action.blocks,
                };
                setCache(blocks);
                return {
                    ...state,
                    blocks,
                }
            case ACTION_ADD_TO_QUEUE:
                return {
                    ...state,
                    queue:{
                        ...state.queue,
                        [action.hash]: action.block,
                    }
                }
            case ACTION_REMOVE_FROM_QUEUE:
                return {
                    ...state,
                    queue: Object
                            .keys(state.queue)
                            .filter(hash=> !action.hashes.includes(hash))
                            .map(hash=> state.queue[hash]),
                }
        }
        return state;
    },
    // ------------------------------------------------------
    // public actions that can be used with dispatch
    // ------------------------------------------------------
    actions,

    // ------------------------------------------------------
    // selectors that can be used with select
    // ------------------------------------------------------
    selectors: {
        isRequesting(state, blockId, attributes){
            // is requesting something
            if(typeof blockId === typeof undefined || typeof attributes === typeof undefined){
                return state.isRequesting;
            }
            // is requesting specific block configuration
            return state.isRequesting && typeof state.queue[getHash(blockId, attributes)] !== typeof undefined;
        },
        isInQueue(state, blockId, attributes) {
            return typeof state.queue[getHash(blockId, attributes)] !== typeof undefined;
        },
        getQueueMap(state){
            return state.queue;
        },
        getQueue(state){
            return Object.values(state.queue);
        },
        getBlocks(state){
            return state.blocks;
        },
        getBlock(state, blockId, attributes){
            return state.blocks[getHash(blockId, attributes)];
        },
    },
    // ----------------------------------------------------------------
    //  controls will be executed as side effects of generator actions
    // ----------------------------------------------------------------
    controls: {
        SSR_FETCH(action){
            return apiFetch({path:action.path, data:action.data, method: "POST"})
        },
    },
});

register(store);