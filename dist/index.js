(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("h1{font-size:6em;font-weight:700;margin:0;padding:.25em 0}.text-align-left{text-align:left}.text-align-right{text-align:right}.text-align-center{text-align:center}.red{color:red}.blue{color:#00f}.pink{color:pink}.black{color:#000}.orange{color:orange}.yellow{color:#ff0}.purple{color:purple}.green{color:green}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var l = Object.defineProperty;
var s = (i, e, t) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var n = (i, e, t) => (s(i, typeof e != "symbol" ? e + "" : e, t), t);
const c = [
  {
    name: "Text-Align-Left",
    icon: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="align-left-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="3" y1="12" x2="17" y2="12" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary" d="M3,6H21M3,18H13" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>',
    type: "textalign"
  },
  {
    name: "Text-Align-Right",
    icon: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="align-right-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="21" y1="12" x2="7" y2="12" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary" d="M21,6H3M21,18H11" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>',
    type: "textalign"
  },
  {
    name: "Text-Align-Center",
    icon: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="align-center" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="6" y1="12" x2="18" y2="12" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary" d="M3,6H21M3,18H21" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>',
    type: "textalign"
  }
], a = [
  {
    name: "Blue",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="blue" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Red",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="red" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Pink",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="pink" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Black",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="black" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Orange",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="orange" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Yellow",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="yellow" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Purple",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="purple" />
                  </svg>`,
    type: "color"
  },
  {
    name: "Green",
    icon: `<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="20" fill="green" />
                  </svg>`,
    type: "color"
  }
], h = {
  text: "Insira seu H1",
  color: "",
  alignText: ""
}, g = {
  title: "H1",
  icon: '<svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="24" height="24"/><g><path d="M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0c-.594.95-1.504 1.658-2.57 2v1h2v7h2V7h-1.43z"/></g></svg>'
}, w = c.concat(a), x = (i) => document.createElement(i), o = (i, e) => i.classList.add(e), r = (i, e) => i.classList.remove(e), p = (i, e) => {
  i.contentEditable = e;
};
class m {
  constructor({ data: e, readOnly: t }) {
    n(this, "data");
    n(this, "H1");
    n(this, "settings");
    this.settings = w, this.data = h, this.H1 = x("h1"), this.H1.innerText = this.data.text, p(this.H1, `${!t}`), e && this._hasData(e);
  }
  static get toolbox() {
    return g;
  }
  render() {
    return this.H1;
  }
  validate(e) {
    var t;
    return !!((t = e.text) != null && t.trim());
  }
  save(e) {
    return { text: e.innerHTML, color: this.data.color, alignText: this.data.alignText };
  }
  renderSettings() {
    return this.settings.map((e) => ({
      icon: e.icon,
      label: e.name,
      onActivate: () => {
        if (e.type === "color")
          return this._colorSetting(e.name);
        if (e.type === "textalign")
          return this._textAlignSetting(e.name);
      }
    }));
  }
  _colorSetting(e) {
    this.settings.map((t) => {
      if (t.type === "color")
        return t.name === e ? (this.data.color = t.name, o(this.H1, t.name.toLowerCase())) : r(this.H1, t.name.toLocaleLowerCase());
    });
  }
  _textAlignSetting(e) {
    this.settings.map((t) => {
      if (t.type === "textalign")
        return e === t.name ? (this.data.alignText = t.name, o(this.H1, `${t.name.toLowerCase()}`)) : r(this.H1, `${t.name.toLowerCase()}`);
    });
  }
  _hasData(e) {
    this.data = {
      text: e == null ? void 0 : e.text,
      color: e == null ? void 0 : e.color,
      alignText: e == null ? void 0 : e.alignText
    }, this._hasDataText(), this._colorSetting(e.color), this._textAlignSetting(e.alignText);
  }
  _hasDataText() {
    this.data.text && (this.H1.innerHTML = this.data.text);
  }
  /* 
     static get enableLineBreaks() {
      return true;
  }
  */
  static get isReadOnlySupported() {
    return !0;
  }
}
export {
  m as default
};
