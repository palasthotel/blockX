import {get, set, setDeprecated} from "./store";

export const registerUseBlock = (fn: any) => {
    set("utils", "useBlocks", fn);
    setDeprecated("useBlock", fn);
}

export const useBlock = get.bind(undefined, "utils", "useBlock");
