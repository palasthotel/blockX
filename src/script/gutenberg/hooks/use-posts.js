import apiFetch from "@wordpress/api-fetch";
import useSWR from 'swr'
import {useDebounce} from './use-utils.js'

//----------------------------------------
// fetch single post
//----------------------------------------
const postsCache = {};
const postFetcher = async (ID)=>{
    const cachedPost = postsCache[ID]
    if(typeof cachedPost === typeof {} && typeof cachedPost.content !== typeof undefined) return cachedPost;

    const post = await apiFetch({path:"/wp/v2/posts/"+ID})
    if(typeof post === typeof {} && post.id){
        post.post_title = post.title.rendered;
        post.ID = post.id;
        postsCache[ID] = {
            ...(postsCache[ID] || {}),
            ...post,
            ID: post.id,
            post_title: post.title.rendered
        }
    }
    return post;    
}
export const usePost = (ID)=>{
    // if(typeof ID === typeof "" && ID.length === 0) return {
    //     isLoading: false,
    // };

    // fetch!
    console.log("useSWR", ID)
    const {data, error} = useSWR(ID, postFetcher)
    return {
        post: data || {},
        isLoading: !error && !data,
    }
}

//----------------------------------------
// query for posts
//----------------------------------------
const postsQueryCache = {};
const postsQueryFetcher = async (queryParams) => {
    // do not execute empty search
    if(queryParams.length === 0) return [];

    // build url path
    const path = `/blockx/v1/query?${queryParams}`
    if(typeof postsQueryCache[path] === typeof []) return postsQueryCache[path];

    // execute query and cache results
    const posts = await apiFetch({path})
    postsQueryCache[path] = posts;
    for(const post of posts){
        postsCache[post.ID] = post;
    }

    return posts;
}

const buildQueryParams = (search, post_types, post_status) => {
    if(search.length === 0) return '';
    return `s=${search}&post_type=${post_types.join(',')}&post_status=${post_status.join(',')}`;
}

export const useFetchPosts = (s, post_types, post_status)=>{
    
    const debounced = useDebounce(s, 600);
    const queryParams = buildQueryParams(debounced, post_types, post_status);

    const {data, error} = useSWR(queryParams, postsQueryFetcher);
    return {
        posts: data || [],
        isLoading: !error && !data,
    }
}

