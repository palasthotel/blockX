import {FunctionComponent, WidgetType} from "./types";
import {set} from "./store";


export const registerEditorWidget = (
    id: WidgetType,
    component: FunctionComponent
) => set("widgets", id, component);

export const getEditorWidget = (id: WidgetType) => window?.BlockXComponents?.widgets?.[id];