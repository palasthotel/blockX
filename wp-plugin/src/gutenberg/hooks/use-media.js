import apiFetch from "@wordpress/api-fetch";
import useSWR from 'swr';

//----------------------------------------
// fetch single media post
//----------------------------------------
const mediaCache = {};
const mediaFetcher = async (ID)=>{

    if(typeof ID === typeof "" && ID.length === 0) return null;
    if(typeof ID === typeof 1 && ID <= 0 ) return null;

    const mediaFromCache = mediaCache[ID];
    if(typeof mediaFromCache === typeof {} && typeof mediaFromCache.type !== typeof undefined) return mediaFromCache;

    const media = await apiFetch({path:"/wp/v2/media/"+ID});

    if(typeof media === typeof {} && media.id === ID){
        mediaCache[ID] = media;
    }
    return media;
}
export const useMedia = (ID)=>{
    const {data, error} = useSWR(ID, mediaFetcher);
    return {
        media: data || {},
        isLoading: !error && !data,
    }
}