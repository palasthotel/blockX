import { useEffect, useState } from "@wordpress/element";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}

export const useEscapeKey = (callback, dependencies = [], enabled = true)=>{

    useEffect(()=>{
        
        if(!enabled) return;

        const onKeyDown = ({key})=>{
            if(key === "Escape") callback();
        }
        window.addEventListener('keydown', onKeyDown);
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        }
    }, dependencies)
}