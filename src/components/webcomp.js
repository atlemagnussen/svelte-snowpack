import { html, render } from "lit-html";
class WebComp extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({mode: "open"});
    }
    template(val) {
        return html`
            <p>Test comp ${val}</p>
        `;
    }
    renderComp() {
        const val = this.getAttributeDefault("val", "def");
        render(this.template(val), this.root);
    }
    connectedCallback() {
        console.log("connected")
        this.renderComp();
    }
    static get observedAttributes() {
        return ['val'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.renderComp();
    }
    get val() {
        return this.getAttribute("val");
    }
      
    set val(newValue) {
        this.setAttribute("val", newValue);
    }

    getAttributeDefault(name, def) {
        return this.hasAttribute(name) ? this.getAttribute(name) : def;
    }
}


customElements.define("web-comp", WebComp);