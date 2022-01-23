class App extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <style>
                .container {
                    max-width: 500px;
                    margin: 30px auto;
                    overflow: auto;
                    min-height: 100px;
                    border: 1px solid steelblue;
                    padding: 30px;
                    border-radius: 5px;
                }
            </style>
            <div class="container">
                <app-header></app-header>
                <add-form></add-form>
            </div>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("app-view", App);