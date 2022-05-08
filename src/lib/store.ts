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
        deprecationWarning(key);
        return ob?.[key];
    }
    return;
}

const deprecationWarning = (key: string) => {
    console.warn(
        "BlockX - DEPRECATION WARNING: for '" + key + "' " +
        "please use @palasthotel/blockx utils for blockx custom javascripts. " +
        "All other registrations will break with BlockX Version 2.0");
}