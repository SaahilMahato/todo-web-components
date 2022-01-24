class TaskView extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .task {
                    background: #f4f4f4;
                    margin: 5px;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 92%;
                }

                button {
                    background-color: red;
                    color: white;
                    cursor: pointer;
                    border: none;
                    width: 100px;
                    height: 40px;
                    border-radius: 100px;
                }
            </style>
            
            <div class="task">
                <div>
                    <h3></h3>
                    <p></p>
                </div>
                <button>Delete</button>
            </div>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    deleteTask = () => {
        const container = document.querySelector("app-view").shadowRoot.querySelector(".container");
        container.removeChild(this);
    }

    connectedCallback() {
        const deleteButton = this.shadowRoot.querySelector("button");
        deleteButton.addEventListener("click", this.deleteTask);
    }

    disconnectedCallback() {
        const deleteButton = this.shadowRoot.querySelector("button");
        deleteButton.removeEventListener("click", this.deleteTask);
    }
}

customElements.define("task-view", TaskView);
