
export const useSettings = () => {
    return BlockX.settings;
}

export const useAutoSaveTimeout = ()=>{
    return useSettings().auto_save_timeout;
}