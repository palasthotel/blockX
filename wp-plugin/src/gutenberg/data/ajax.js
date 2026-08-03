import apiFetch from "@wordpress/api-fetch";

export const fetchWidgetAjax = (blockId, widgetKeyFullPath, params)=>{
    const parts = [];
    for(const key in params){
        const value = params[key];
        parts.push(`${key}=${value}`);
    }
    const queryParams = parts.length > 0 ? `?${parts.join("&")}` : "";
    return apiFetch({path:`/blockx/v1/ajax/${blockId}/${widgetKeyFullPath}${queryParams}`});
}