import {BlockId, FunctionComponent} from "./types";
import {get, getDeprecated, set} from "./store";
import {blockIdToString} from "./id";

export const registerEditorView = (
    id: BlockId,
    component: FunctionComponent
) => set("editorViews", blockIdToString(id), component);

export const getEditorView = (id: BlockId): FunctionComponent | undefined => {
    return get<FunctionComponent>("editorViews", blockIdToString(id))
        ?? getDeprecated<FunctionComponent>(blockIdToString(id));
}