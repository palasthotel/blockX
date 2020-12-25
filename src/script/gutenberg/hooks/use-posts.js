import apiFetch from "@wordpress/api-fetch";
import useSWR from 'swr'
import { useBlock } from "./use-context.js";
import { useDebounce } from './use-utils.js'

//----------------------------------------
// fetch single post
//----------------------------------------
const postsCache = {};
const postFetcher = async (ID)=>{
    const cachedPost = postsCache[ID];
    if(typeof cachedPost === typeof {} && typeof cachedPost.post_title !== typeof undefined) return cachedPost;

    const post = await apiFetch({path:"/blockx/v1/get/"+ID});
    if(typeof post === typeof {} && post.ID){
        postsCache[ID] = {
            ...(postsCache[ID] || {}),
            ...post,
        }
    }
    return post;    
}
export const usePost = (ID)=>{

    // fetch!
    const {data, error} = useSWR(ID, postFetcher);
    return {
        post: data || {},
        isLoading: !error && !data,
    }
}

//----------------------------------------
// query for posts
//----------------------------------------
const postsQueryCache = {};
const postsQueryFetcher = (data) => async () => {
    // do not execute empty search
    if(data.length === 0) return [];

    // build url path
    const path = `/blockx/v1/query`
    const cacheKey = JSON.stringify(data);
    if(typeof postsQueryCache[cacheKey] === typeof []) return postsQueryCache[cacheKey];

    // execute query and cache results
    const posts = await apiFetch({
        method: 'POST',
        path,
        data,
    })
    postsQueryCache[cacheKey] = posts;
    for(const post of posts){
        postsCache[post.ID] = post;
    }

    return posts;
}

const buildQueryParams = (search, post_types, post_status, instance) => {
    return {
        s: search,
        post_type: post_types.join(','),
        post_status: post_status.join(','),
        block_instance: instance,
    }
}

export const useFetchPosts = (s, post_types, post_status, use_context)=>{
    
    const {blockId, dirtyState} = useBlock();
    const debounced = useDebounce(s, 600);

    const context = use_context ? {blockId, content: dirtyState} : {blockId};
    const queryParams = buildQueryParams(debounced, post_types, post_status, {...context});

    const query = JSON.stringify(queryParams);
    const {data, error} = useSWR(query, postsQueryFetcher(queryParams));
    return {
        posts: data || [],
        isLoading: !error && !data,
    }
}

