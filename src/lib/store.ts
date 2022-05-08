import {FunctionComponent} from "./types";

declare global {
    interface Window {
        BlockXComponents: {

            // everything else
            [key: string]: any

            editorViews: {
                [blockId: string]: FunctionComponent
            },
            widgets: {
                [widgetId: string]: FunctionComponent
            }
        }
    }
}


export const set = (path: string, key: string, object: any) => {
    window.BlockXComponents = {
        ...(window.BlockXComponents || {}),
        [path]: {
            ...(window.BlockXComponents?.[path] || {}),
            [key]: object,
        }
    };
}

export const setDeprecated = (key: string, object: any) => {
    console.warn("DEPRECATION WARNING: Please use @palastotel/blockx.")
    window.BlockXComponents = {
        ...(window.BlockXComponents || {}),
        [key]: object
    };
}

export const get = <T>(path: string, key: string): T | undefined =>
    window?.BlockXComponents?.[path]?.[key];

export const getDeprecated = <T>(key: string): T | undefined => {
    const ob = window?.BlockXComponents ?? {};
    if (ob[key] != undefined) {
        console.warn(
            "DEPRECATION WARNING: " +
            "please use @palasthotel/blockx utils for blockx custom javascripts. " +
            "All ohter registrations will be break with BlockX Version 2.0");
        return ob?.[key];
    }
    return;
}