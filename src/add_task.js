class AddTask extends HTMLElement {
  constructor() {
    super();
    this.setupTemplate();
  }

  setupTemplate = () => {
    this.template = document.createElement("template");
    this.template.innerHTML = `
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
                }

                .form-control {
                    margin: 20px 0;
                }

                .form-control label {
                    display: block;
                }

                .form-control input {
                    width: 100%;
                    height: 40px;
                    margin: 5px;
                    padding: 3px 7px;
                    font-size: 17px;
                }

            </style>

            <form class='add-form'>
                <div class='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add Task' />
                </div>
                <div class='form-control'>
                    <label>Day and Time</label>
                    <input type='text' placeholder='Add Day and Time' />
                </div>
                <input class='btn btn-block' type='submit' value='Save Task' />
            </form>
        `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  };
}

customElements.define("add-form", AddTask);
