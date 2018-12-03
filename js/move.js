import tasks from './json/tasks.js'

(function (window, document) {



	const listToJson = async () => {
		let myNodelist = document.getElementsByTagName("LI");
		let items = Array.prototype.map.call(myNodelist,
			element =>
				({
					_id: element.data("_id"),
					title: element.data("title"),
					state: element.state ? element.state : 'default'
				})
		);

		return await JSON.stringify(items);
	};

	const buildList = async () => {

		const items = Array.prototype.map.call(tasks, (item) => {
			if (item.state === 'DELETED') {
				return '';
			}
			if (item.state === "done") {
				_class = "checked";
			}
			return "<li data-id='" + item.id + "' class='" + _class + "'>" + item.title + "<li>";

		}, {}).join('');

		return await items;
	}

	window.onload = function () {
		let nodeContainer = document.querySelector("myUL");
		await buildList().then((list) => nodeContainer.innerHTML = list);

		let myNodelist = document.getElementsByTagName("LI");

		let addButton = document.querySelector("#addBtn");

		addButton.addEventListener("click", async () => await addItem());

		const appendCloseButtontoEachItemInList = async () => {
			let x = () => {
				// Create a "close" button and append it to each list item
				var i;
				for (i = 0; i < myNodelist.length; i++) {
					var span = document.createElement("SPAN");
					var txt = document.createTextNode("\u00D7");
					span.className = "close";
					span.appendChild(txt);
					myNodelist[i].appendChild(span);
				}
			};

			try {
				return await x();
			} catch (error) { }
		};

		const attachDeleteEventListener = async () => {
			const x = () => {
				// Click on a close button to hide the current list item
				var close = document.getElementsByClassName("close");
				var i;
				for (i = 0; i < close.length; i++) {
					close[i].onclick = function () {
						var div = this.parentElement;
						div.style.display = "none";
					};
				}
			};
			try {
				return await x();
			} catch (error) {
				console.log(error);
			}
		};

		const attachDoneEventListener = async () => {
			const x = () => {
				// Add a "checked" symbol when clicking on a list item
				var list = document.querySelector("ul");
				list.addEventListener("click", function (ev) {
					if (ev.target.tagName === "LI") {
						ev.target.classList.toggle("checked");
					}
				}, false);
			};
			try {
				return await x();
			} catch (error) {
				
			}
		};

		// Create a new list item when clicking on the "Add" button
		const addItem = async e => {

			const appendItem = async () => {
				var li = document.createElement("li");
				var inputValue = document.getElementById("myInput").value;
				var t = document.createTextNode(inputValue);
				var span = document.createElement("SPAN");
				var txt = document.createTextNode("\u00D7");

				li.appendChild(t);
				if (inputValue === "") {
					alert("Item is empty!");
				} else {
					document.getElementById("myUL").appendChild(li);
				}

				document.getElementById("myInput").value = "";

				span.className = "close";
				span.appendChild(txt);
				li.appendChild(span);
				console.log("Raise add event", e);
				return await registerDeleteClick();
			};

			const registerDeleteClick = async () => {
				let close = document.getElementsByClassName("close");
				for (i = 0; i < close.length; i++) {
					close[i].onclick = function () {
						var div = this.parentElement;
						div.style.display = "none";//
					};
				}
			};

			return await appendItem();
		};


		let init = async () => {
			try {
				await appendCloseButtontoEachItemInList();
				await attachDeleteEventListener();
				await attachDoneEventListener();
			}
			catch (error) {
				console.log(error);
			}
		}
		init().then(async () => console.log(await listToJson()));//test
	};
})(window, document);