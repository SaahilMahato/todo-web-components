class AppView extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        const template = document.createElement('template');
        template.innerHTML = `
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
                <add-task></add-task>
            </div>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };
}

customElements.define("app-view", AppView);
