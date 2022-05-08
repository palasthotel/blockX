import {BlockId} from "./types";

export const blockId = (namespace: string, name: string): BlockId => ({namespace, name});
export const blockIdToString = (id: BlockId): string => `${id.namespace}/${id.name}`;