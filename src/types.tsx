import { API } from "@editorjs/editorjs"

export type IData = {
    text: string,
    color: string,
    alignText: string
}

export type ISetting = {
    name: string,
    icon: string,
    type: string
}

export type IH1 = {
    data?: IData,
    readOnly?: boolean,
    api?: API,
    config?: undefined
}