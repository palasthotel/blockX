import {FunctionComponent, WidgetId} from "./types";
import {set} from "./store";


export const registerEditorWidget = (
    id: WidgetId,
    component: FunctionComponent
) => set("widgets", id, component);

export const getEditorWidget = (id: WidgetId) => window?.BlockXComponents?.widgets?.[id];