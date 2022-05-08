import {get, set, setDeprecated} from "./store";
import {FunctionComponent} from "./types";


export const registerServerSideRenderQueue = (component: FunctionComponent) => {
    set("utils", "ssrq", component);
    setDeprecated("ServerSideRenderQueue", component);
}

export const getServerSideRenderQueueComponent = () => get<FunctionComponent>( "utils", "ssrq");
