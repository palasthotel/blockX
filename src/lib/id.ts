import {BlockId} from "./types";

export const blockId = (namespace: string, name: string): BlockId => ({namespace, name});
export const blockIdToString = (id: BlockId): string => `${id.namespace}/${id.name}`;
export const blockIdFromString = (id: string): BlockId|undefined => {
    const parts = id.split("/");
    if(parts.length < 2) return;
    return {
        namespace: parts[0],
        name: parts[1],
    }
}