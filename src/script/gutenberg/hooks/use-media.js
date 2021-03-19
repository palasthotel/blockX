import apiFetch from "@wordpress/api-fetch";
import useSWR from 'swr';

//----------------------------------------
// fetch single post
//----------------------------------------
const mediaCache = {};
const mediaFetcher = async (ID)=>{

    if(typeof ID === typeof "" && ID.length === 0) return null;
    if(typeof ID === typeof 1 && ID <= 0 ) return null;

    const cachedMedia = mediaCache[ID];
    if(typeof cachedMedia === typeof {} && typeof cachedMedia.type !== typeof undefined) return cachedMedia;

    const media = await apiFetch({path:"/wp/v2/media/"+ID});

    if(typeof media === typeof {} && media.id === ID){
        cachedMedia[ID] = {
            ...(cachedMedia[ID] || {}),
            ...media,
        }
    }
    return media;
}
export const useMedia = (ID)=>{
    // fetch!
    const {data, error} = useSWR(ID, mediaFetcher);
    return {
        media: data || {},
        isLoading: !error && !data,
    }
}