import {
    get,
    getDeprecated,
    set,
    setDeprecated,
} from "./lib/store";
import {BlockId, WidgetId} from "./lib/types";

type FunctionComponent = (props: any) => JSX.Element

const blockId = (namespace: string, name: string): BlockId => ({namespace, name});
const blockIdToString = (id: BlockId): string => `${id.namespace}/${id.name}`;

const registerEditorView = (
    id: BlockId,
    component: FunctionComponent
) => set("editorViews", blockIdToString(id), component);

const registerEditorWidget = (
    id: WidgetId,
    component: FunctionComponent
) => set("widgets", id, component);

const getEditorView = (id: BlockId): FunctionComponent | undefined => {
    return get<FunctionComponent>(blockIdToString(id), "editorViews")
        ?? getDeprecated<FunctionComponent>(blockIdToString(id));
}
const getEditorWidget = (id: WidgetId) => window?.BlockXComponents?.widgets?.[id];

const setServerSideRenderQueue = (component: FunctionComponent) => {
    set("utils", "ssrq", component);
    setDeprecated("ServerSideRenderQueue", component);
}

const getServerSideRenderQueueComponent = () => get<FunctionComponent>( "utils", "ssrq");

const setUseBlock = (fn: any) => {
    set("utils", "useBlocks", fn);
    setDeprecated("useBlock", fn);
}

const useBlock = get.bind(undefined, "utils", "useBlock");

export {
    registerEditorView,
    getEditorView,

    registerEditorWidget,
    getEditorWidget,

    setServerSideRenderQueue,
    getServerSideRenderQueueComponent,

    setUseBlock,
    useBlock,
}