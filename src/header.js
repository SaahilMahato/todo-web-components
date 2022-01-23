class Header extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .btn {
                    display: inline-block;
                    background: green;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    margin: 5px;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 15px;
                    font-family: inherit;
                }
            </style>
            
            <header class="header">
                <h1>Todo App</h1>
                <button class="btn">Add</button>
            </header>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    toggleAddForm = () => {
        const form =  document.querySelector("app-view").shadowRoot.querySelector("add-form");
        if (form.style.display !== "none")
            form.style.display = "none";
        else
            form.style.display = "block";
    }

    connectedCallback() {
        const form = document.querySelector("app-view").shadowRoot.querySelector("add-form");
        form.style.display = "none";

        const addButton = this.shadowRoot.querySelector(".btn");
        addButton.addEventListener("click", this.toggleAddForm);
    }

    disconnectedCallback() {
        const addButton = this.shadowRoot.querySelector(".btn");
        addButton.removeEventListener("click", this.toggleAddForm);
    }
}

customElements.define("app-header", Header);
