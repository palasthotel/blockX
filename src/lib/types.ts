import {ReactNode} from "react";

export type BlockId = {namespace: string, name: string}
export type WidgetType = string

export type FunctionComponent = (props: any) => ReactNode
