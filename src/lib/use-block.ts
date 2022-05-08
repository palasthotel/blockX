import {get, set, setDeprecated} from "./store";

export const registerUseBlock = (fn: any) => {
    set("utils", "useBlock", fn);
    setDeprecated("useBlock", fn);
}

export const useBlock = ()=> get<Function>("utils", "useBlock")?.();