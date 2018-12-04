class TasksController {

    constructor(tasks, document, window) {
        this.tasks = tasks
        this.document = document;
        this.nodeContainer = document.querySelector("#myUL");
        this.window = window;
        this.init();
    }
    async listToJson() {

        let myNodelist = document.getElementsByTagName("LI");;
        let items = Array.prototype.map.call(myNodelist,
            element =>
                ({
                    _id: element.dataset._id,
                    title: element.dataset.title,
                    state: element.dataset.state ? element.dataset.state : 'default'
                })
        );
        return await JSON.stringify(items);
    };

    async buildList() {
        
        const items = Array.prototype.map.call(this.tasks, (item) => {
            let _class = "";
            if (item.state === 'deleted') {
                return '';
            }
            if (item.state === "completed") {
                _class = "checked";
            }
            return `<li data-state=${item.state} data-id="${item._id}" class="${_class}">${item.title}</li>`;

        }).join('');
        return await items;
    }

    async addItem(e) {

        const appendItem = async () => {

            var li = this.document.createElement("li");
            var inputValue = this.document.getElementById("myInput").value;
            var t = this.document.createTextNode(inputValue);
            var span = this.document.createElement("SPAN");
            var txt = this.document.createTextNode("\u00D7");

            li.appendChild(t);
            if (inputValue === "") {
                alert("Item is empty!");
            } else {
                this.document.getElementById("myUL").appendChild(li);
            }

            this.document.getElementById("myInput").value = "";

            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            li.dataset.state = 'custom';
            return await registerDeleteClick();
        };

        const registerDeleteClick = async () => {

            let close = this.document.getElementsByClassName("close");
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function (ev) {
                    var li = close[i].parentElement;
                    li.style.display = "none";//
                    li.dataset.state = "deleted";
                };
            }
        };
        try {
            //await this.window.parent.postMessage();
            return await appendItem();
        } catch (error) {
            console.log(error);
        }
                  
            
    };

    async appendCloseButtontoEachItemInList() {

        let myNodelist = document.getElementsByTagName("LI");
        const append = async () => {
            let i;
            for (let i = 0; i < myNodelist.length; i++) {
                let span = this.document.createElement("SPAN");
                let txt = this.document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                myNodelist[i].appendChild(span);
            }
            return await attachDeleteEventListener();
        };
        const attachDeleteEventListener = async () => {
            // Click on a close button to hide the current list item
            let close = this.document.getElementsByClassName("close");
            let i;
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    let li = close[i].parentElement;
                    li.style.display = "none";
                    li.dataset.state = "deleted";
                };
            }
        }

        try {
            return await append();
        } catch (error) {
            console.log(error);
        }
    };

    async attachDoneEventListener() {
        const x = () => {
            // Add a "checked" symbol when clicking on a list item
            var list = this.document.querySelector("ul");
            list.addEventListener("click", function (ev) {
                if (ev.target.tagName === "LI") {
                    ev.target.classList.toggle("checked");
                    if (ev.target.classList.contains("checked")) {
                        ev.target.dataset.state = 'done';
                    } else {
                        ev.target.dataset.state = 'default';
                    }

                }
            }, false);
        };
        try {
            return await x();
        } catch (error) {

        }
    };

    getThreeMonthQuery (){
        return JSON.parse({query: {"key" : "days", "param": 90}});
    }
    async init() {

        try {
            this.window.onmessage = (event) => {
                if (event.data) {
                   this.tasks = event.data;
                }
              };
            this.window.parent.postMessage(getThreeMonthQuery);
            await this.buildList().then((list) => this.nodeContainer.innerHTML = list);
            await this.appendCloseButtontoEachItemInList();
            await this.attachDoneEventListener();
        }
        catch (error) {
            console.log(error);
        }
    }



}