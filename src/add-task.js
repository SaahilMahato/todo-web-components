import { addNewTodo } from "./service.js";

class AddTask extends HTMLElement {

    constructor() {
        super();
        this.setupTemplate();
    }

    setupTemplate = () => {
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
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

                .btn:focus {
                    outline: none;
                }

                .btn:active {
                    transform: scale(0.98);
                }

                .btn-block {
                    display: block;
                    width: 100%;
                }

                .add-form {
                    margin-bottom: 40px;
                    width: 100%;
                }

                .form-control {
                    margin: 20px 0;
                    width: 100%;
                }

                .form-control label {
                    display: block;
                }

                .form-control input {
                    width: 97%;
                    height: 40px;
                    margin: 5px 0;
                    padding: 4px 8px;
                    font-size: 18px;
                }
            </style>

            <form class='add-form'>
                <div class='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add Task' name="title" required/>
                </div>
                <div class='form-control'>
                    <label>Day and Time</label>
                    <input type='text' placeholder='Add Day and Time' name="day" required/>
                </div>
                <input class='btn btn-block' type='submit' value='Save Task' />
            </form>
        `;

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    addNewTask = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const container = document.querySelector("app-view").shadowRoot.querySelector(".container");
        
        const newTask = document.createElement("task-view");
        newTask.shadowRoot.querySelector("h3").innerText = data.get("title");
        newTask.shadowRoot.querySelector("p").innerText = data.get("day");
        
        container.appendChild(newTask);

        addNewTodo(data.get("title"), data.get("day"));
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector(".add-form");
        form.addEventListener("submit", e => {
            this.addNewTask(e);
            form.reset();
        });
    }

    disconnectedCallback() {
        const form = this.shadowRoot.querySelector(".add-form");
        form.removeEventListener("submit", e => {
            this.addNewTask(e);
            form.reset();
        });
    }
}

customElements.define("add-task", AddTask);
