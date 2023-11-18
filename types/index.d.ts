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

declare class H1{
    public data: IData
    public H1: HTMLHeadElement
    public settings: ISetting[]

    static get toolbox() {
        return toolBox
    }

    constructor({ data, readOnly }: IH1)

    public render(): HTMLHeadElement;

    validate(savedData: IData):  boolean

    save(blockContent: HTMLDivElement): IData

    renderSettings(): {
        icon: string;
        label: string;
        onActivate: () => void;
    }[]

    _colorSetting(colorSelected: string): void;

    _textAlignSetting(alignSelected: string): void

    _hasData(data: IData): void

    _hasDataText(): void

    /* 
       static get enableLineBreaks() {
        return true;
    }
    */

    static get isReadOnlySupported(): boolean
}

export default H1