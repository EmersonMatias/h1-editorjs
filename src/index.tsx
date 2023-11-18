import { InitialData, toolBox } from "./constants"
import "./index.css"
import Settings from "./settings"
import { IData, IH1, ISetting } from "../types"
import { addClassName, contentEditable, createElement, removeClassName } from "./utils"

export default class H1 {
    private data: IData
    private H1: HTMLHeadElement
    private settings: ISetting[]

    static get toolbox() {
        return toolBox
    }

    constructor({ data, readOnly }: IH1) {
        this.settings = Settings
        this.data = InitialData

        this.H1 = createElement("h1") //Criando elemento H1
        this.H1.innerText = this.data.text
        contentEditable(this.H1, `${!readOnly}`)
        
        if (data) {
            this._hasData(data)
        }

    }

    render() {
        return this.H1
    }

    validate(savedData: IData) {
        if (!savedData.text?.trim()) {
            return false
        }

        return true
    }

    save(blockContent: HTMLDivElement) {
        const text = blockContent.innerHTML
        const response = { text: text, color: this.data.color, alignText: this.data.alignText }
        return response
    }

    renderSettings() {
        return this.settings.map((setting) => ({
            icon: setting.icon,
            label: setting.name,
            onActivate: () => {
                if (setting.type === "color") {
                    return this._colorSetting(setting.name)
                } else if (setting.type === "textalign") {
                    return this._textAlignSetting(setting.name)
                }
            }
        }))
    }

    _colorSetting(colorSelected: string) {
        this.settings.map((setting) => {
            if (setting.type === "color") {
                if (setting.name === colorSelected) {
                    this.data.color = setting.name
                    return addClassName(this.H1, setting.name.toLowerCase())
                } else {
                    return removeClassName(this.H1, setting.name.toLocaleLowerCase())
                }
            }
        })
    }

    _textAlignSetting(alignSelected: string) {
        this.settings.map((setting) => {
            if (setting.type === "textalign")
                if (alignSelected === setting.name) {
                    this.data.alignText = setting.name
                    return addClassName(this.H1, `${setting.name.toLowerCase()}`)
                } else {
                    return removeClassName(this.H1, `${setting.name.toLowerCase()}`)
                }
        })
    }

    _hasData(data: IData) {
        this.data = {
            text: data?.text,
            color: data?.color,
            alignText: data?.alignText
        }

        this._hasDataText();
        this._colorSetting(data.color)
        this._textAlignSetting(data.alignText)
    }

    _hasDataText() {
        if (this.data.text) {
            this.H1.innerHTML = this.data.text
        }
    }

    /* 
       static get enableLineBreaks() {
        return true;
    }
    */

    static get isReadOnlySupported() {
        return true;
    }
}