import apiFetch from "@wordpress/api-fetch";
import useSWR from 'swr'
import { useBlock } from "./use-context.js";
import { useDebounce } from './use-utils.js'

//----------------------------------------
// fetch single user
//----------------------------------------
const usersCache = {};
const userFetcher = async (id)=>{
    const cachedUser = usersCache[id];
    if(typeof cachedUser === typeof {} && typeof cachedUser.name !== typeof undefined) return cachedUser;

    const user = await apiFetch({path:"/wp/v2/users/"+id});
    if(typeof user === typeof {} && user.id){
        usersCache[id] = {
            ...(usersCache[id] || {}),
            ...user,
        }
    }
    return user;
}
export const useUser = (id)=>{

    // fetch!
    const {data, error} = useSWR(id, userFetcher);
    return {
        user: data || {},
        isLoading: !error && !data,
    }
}

//----------------------------------------
// query for users
//----------------------------------------
const usersQueryCache = {};
const usersQueryFetcher = (data) => async () => {
    // do not execute empty search
    if(data.length === 0) return [];

    // build url path
    const path = `/wp/v2/users`;
    const query = [];
    for (const queryKey in data) {
        query.push(`${queryKey}=${data[queryKey]}`);
    }
    const queryString = query.join('&');
    const cacheKey = queryString;
    if(typeof usersQueryCache[cacheKey] === typeof []) return usersQueryCache[cacheKey];

    // execute query and cache results
    const users = await apiFetch({
        path: `${path}?${queryString}`,
    })
    usersQueryCache[cacheKey] = users;
    for(const user of users){
        usersCache[user.id] = user;
    }

    return users;
}

const buildQueryParams = (search, roles, instance) => {
    return {
        search: search,
        roles: roles.join(','),
        block_instance: instance,
    }
}

export const useFetchUsers = (search, roles, use_context)=>{

    const {blockId, dirtyState} = useBlock();
    const debounced = useDebounce(search, 600);

    const context = use_context ? {blockId, content: dirtyState} : {blockId};
    const queryParams = buildQueryParams(debounced, roles, {...context});

    const query = JSON.stringify(queryParams);
    const {data, error} = useSWR(query, usersQueryFetcher(queryParams));
    return {
        users: data || [],
        isLoading: !error && !data,
    }
}

