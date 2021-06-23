import {useEffect} from "@wordpress/element";

export const useAutoSaveTimeout = (fn, changes) => {
    const autoSaveTimeout = BlockX.settings.auto_save_timeout;
    useEffect(() => {
        let timeoutId = null;
        if (Object.keys(changes).length !== 0 && autoSaveTimeout > 100) {
            timeoutId = setTimeout(() => {
                fn();
            }, autoSaveTimeout);
        }
        return () => clearTimeout(timeoutId);
    }, [JSON.stringify(changes)]);
}