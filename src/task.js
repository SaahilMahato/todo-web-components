class Task extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <style>
                .task {
                    background: #f4f4f4;
                    margin: 5px;
                    padding: 10px 20px;
                    cursor: pointer;
                }
                .task h3 {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            </style>
            
            <div class="task">
                <h3>Task title</h3>
                <p>Task time</p>
            </div>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

customElements.define("task-view", Task);