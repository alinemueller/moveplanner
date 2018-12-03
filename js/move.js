// import {tasks} from './json/tasks.js' //consider this statement 

(function (window, document) {

	const tasks = [
		{
			"_id": "01e0ba3c-0693-4017-9401-3ab6f017ad1e",
			"title": "Mietvertrag der neuen Wohnung unterzeichnen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.056Z",
			"_createdDate": "2018-11-30T12:45:22.056Z"
		},
		{
			"_id": "5b8462d9-4321-436f-a6cf-39cc3502f79d",
			"title": "Form- und fristgerecht alte Wohnung kündigen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.055Z",
			"_createdDate": "2018-11-30T12:45:22.055Z"
		},
		{
			"_id": "a274c55a-9fef-4e37-a83f-32e541fd1e2b",
			"title": "Nachmieter suchen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.054Z",
			"_createdDate": "2018-11-30T12:45:22.054Z"
		},
		{
			"_id": "c02a0480-7918-4600-8b8e-246f075b5e9a",
			"title": "Auszugstermin mit altem Vermieter besprechen/vereinbaren",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.053Z",
			"_createdDate": "2018-11-30T12:45:22.053Z"
		},
		{
			"_id": "c279ba1b-afe7-4e82-9d74-ea3858acdb10",
			"title": "Einzugstermin mit neuem Vermieter besprechen/vereinbaren",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.052Z",
			"_createdDate": "2018-11-30T12:45:22.052Z"
		},
		{
			"_id": "c5cb79ec-77dc-41e7-b5d5-38e0486d7710",
			"title": "Ggf. Sonderurlaub bei Arbeitgeber einreichen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.051Z",
			"_createdDate": "2018-11-30T12:45:22.051Z"
		},
		{
			"_id": "bdbdf93b-a290-45df-8652-3e4a31742a17",
			"title": "Entscheiden, ob man für die Endreinigung der Wohnung ein Reinigungsinstitut beauftragt oder die Wohnung selbst putzt",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.050Z",
			"_createdDate": "2018-11-30T12:45:22.050Z"
		},
		{
			"_id": "3e889799-a541-48d9-a918-aa07770ddc16",
			"title": "Entscheiden, ob man für den Umzug ein Umzugsunternehmen beauftragt oder den Umzug selbst durchführt",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.049Z",
			"_createdDate": "2018-11-30T12:45:22.049Z"
		},
		{
			"_id": "b545f00a-ccd7-447a-aa50-26137d4300bf",
			"title": "Ggf. weitere Umzugshelfer organisieren",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.048Z",
			"_createdDate": "2018-11-30T12:45:22.048Z"
		},
		{
			"_id": "69ffae68-5ee5-4d78-ac71-b7469e765df1",
			"title": "Offerten bei Umzugsunternehmen und/oder Reinigungsinstitut einholen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.047Z",
			"_createdDate": "2018-11-30T12:45:22.047Z"
		},
		{
			"_id": "82d51fde-f1ce-48fe-af71-0a45234028b3",
			"title": "Neue Wohnung ausmessen, bzw. Grundrissplan für die neue Wohnung anfordern",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.046Z",
			"_createdDate": "2018-11-30T12:45:22.046Z"
		},
		{
			"_id": "841f56b1-7d4a-4255-8822-fb01d95b2e4e",
			"title": "Einrichtung der neuen Wohnung planen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.045Z",
			"_createdDate": "2018-11-30T12:45:22.045Z"
		},
		{
			"_id": "05287b73-f471-43d4-bf1c-2c209739b3b2",
			"title": "Ggf. Neuanschaffungen an neue Adresse bestellen",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.044Z",
			"_createdDate": "2018-11-30T12:45:22.044Z"
		},
		{
			"_id": "41966bff-d377-40af-b353-fff0bc0a95f7",
			"title": "Mitgliedschaften und Abos kündigen, bzw. über Umzug informieren (z.b. Vereine, Zeitschriften, Kundenkarten)",
			"days": 90,
			"days_after_move": 0,
			"_owner": "3d46bfaa-05c7-4ef9-bf5f-4ad37fb493d2",
			"_updatedDate": "2018-11-30T12:45:22.043Z",
			"_createdDate": "2018-11-30T12:45:22.043Z"
		}
	];

	const listToJson = async () => {
		let myNodelist = document.getElementsByTagName("LI");
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

	const buildList = async () => {
		let _class = "";
		const items = Array.prototype.map.call(tasks, (item) => {
			if (item.state === 'deleted') {
				return '';
			}
			if (item.state === "done") {
				_class = "checked";
			}
			return `<li data-state=${item.state} data-id="${item._id}" class="${_class}">${item.title}</li>`;

		}).join('');
		return await items;
	}

	window.onload = function () {

		let nodeContainer = document.querySelector("#myUL");
		let myNodelist = document.getElementsByTagName("LI");
		let addButton = document.querySelector("#addBtn");
		
		addButton.addEventListener("click", async () => await addItem());
		
		const appendCloseButtontoEachItemInList = async () => {
		
			const append =  async() => {
				// Create a "close" button and append it to each list item
				var i;
				for (i = 0; i < myNodelist.length; i++) {
					var span = document.createElement("SPAN");
					var txt = document.createTextNode("\u00D7");
					span.className = "close";
					span.appendChild(txt);
					myNodelist[i].appendChild(span);
				}
				return   await attachDeleteEventListener();
			};
			const attachDeleteEventListener =  async () => {
					// Click on a close button to hide the current list item
					var close = document.getElementsByClassName("close");
					var i;
					for (i = 0; i < close.length; i++) {
						close[i].onclick = function () {
							var li = this.parentElement;
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

		const attachDoneEventListener = async () => {
			const x = () => {
				// Add a "checked" symbol when clicking on a list item
				var list = document.querySelector("ul");
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
				li.dataset.state = 'custom';
				return await registerDeleteClick();
			};

			const registerDeleteClick = async () => {
				let close = document.getElementsByClassName("close");
				for (i = 0; i < close.length; i++) {
					close[i].onclick = function (ev) {
						var li = this.parentElement;
						li.style.display = "none";//
						li.dataset.state = "deleted";
						console.log(li);
					};
				}
			};

			return await appendItem();
		};

		let init = async () => {
			try {
				await buildList().then((list) => nodeContainer.innerHTML = list);
				await appendCloseButtontoEachItemInList();
				await attachDoneEventListener();
			}
			catch (error) {
				console.log(error);
			}
		}
		init();

	};
})(window, document);