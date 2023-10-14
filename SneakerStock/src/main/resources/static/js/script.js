console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
});

function init() {
	let showCollection = document.getElementById('showCollection');
	showCollection.addEventListener('click', function(e) {
		let sneakerDiv = document.getElementById('allSneakers');
		sneakerDiv.textContent = "";
		let formDiv = document.getElementById('addSneakerFormDiv');
		formDiv.textContent = "";
		loadAllSneakers();
	})
	let addSneaker = document.getElementById('addSneaker');
	addSneaker.addEventListener('click', function(e) {
		let sneakerDiv = document.getElementById('allSneakers');
		sneakerDiv.textContent = "";
		let formDiv = document.getElementById('addSneakerFormDiv');
		formDiv.textContent = "";
		displayAddSneakerForm();
	})



}

function loadAllSneakers() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/sneakers');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let sneakers = JSON.parse(xhr.responseText);
				displaySneakerList(sneakers);
			} else {
				//TODO
			}
		}
	}
	xhr.send();
}

function displaySneakerList(sneakers) {
	let div = document.getElementById('allSneakers');
	if (sneakers && Array.isArray(sneakers) && sneakers.length > 0) {

		let table = document.createElement('table');
		let tableHead = document.createElement('thead');
		let tr = document.createElement('tr');
		let thadd = document.createElement('th');
		thadd.textContent = "Add to Collection";
		let thfilter = document.createElement('th');
		thfilter.textContent = "Filter By";

		let tableBody = document.createElement('tbody');
		div.append(table);
		table.appendChild(tableHead);
		table.appendChild(tableBody);
		tableHead.appendChild(tr);
		tr.appendChild(thadd);
		tr.appendChild(thfilter);


		for (let sneaker of sneakers) {
			let tr = document.createElement('tr');
			let td1 = document.createElement('td');
			let img = document.createElement('img');
			if (sneaker.id === 2) {
				img.src = "images/am90-custom.png";
			}
			else if (sneaker.id === 9) {
				img.src = "images/jumpman-custom.png";
			} else {
				img.src = sneaker.imageURL;
			}
			
			let boxCondition = "";
			if (sneaker.box) {
				boxCondition = "Has box";
			} else {
				boxCondition = "Does not have box";
			}
			
			td1.appendChild(img);
			let td2 = document.createElement('td');
			let details = sneaker.brand.name.toUpperCase() + " " + sneaker.collection.toUpperCase() + " '" + sneaker.name.toUpperCase() + "'"+ "<br>" +
			"Retail Price: $" + sneaker.retailPrice + "<br>" +
			"Colorway: " + sneaker.colorway + "<br>" +
			"Release Date: " + sneaker.releaseDate + "<br>" +
			"Added to Collection: " + sneaker.acquisitionDate + "<br>" +
			"Condition: " + sneaker.condition.title + "<br>" + boxCondition;
			td2.innerHTML = details;
			tableBody.appendChild(tr);
			tr.appendChild(td1);
			tr.appendChild(td2);
		}
	}

}

function displayAddSneakerForm() {
	let div = document.getElementById('addSneakerFormDiv');

/*	let h1 = document.createElement('h1');
	h1.textContent = "Add Sneaker to Collection"
	div.appendChild(h1);

	let form = document.createElement('form');
	form.name = "addSneakerForm";
	div.appendChild(form);

	let label1 = document.createElement('label');
	label1.for = "collection";
	label1.textContent = "Collection"
	form.appendChild(label1);
	let input1 = document.createElement('input');
	input1.type = "text";
	input1.name = "collection";
	form.appendChild(input1);*/


let addForm =
	`<h2>Add Sneaker to Collection</h2>
			<form name="addSneakerForm">
				<label for="collection">Collection:</label><br>
				<input type="text" name="collection"><br>
	
				<label for="name">Name:</label><br>
				<input type="text" name="name"><br>
	
				<label for="retailPrice">Retail Price:</label><br>
				<input type="number" name="retailPrice"><br>
	
				<label for="releaseDate">Release Date:</label><br>
				<input type="date" name="releaseDate"><br>
	
				<label for="acquisitionDate">Acquisition Date:</label><br>
				<input type="date" name="acquisitionDate"><br>
				
				<label for="colorway">Colorway:</label><br>
				<input type="text" name="colorway"><br>
				
				<label for="imageURL">Image URL:</label><br>
				<input type="text" name="imageURL"><br>
				
				//brand dropdown
				//condition dropdown
				//box radio buttons
	
				<button name="add">Add to Collection</button>
	
		</form>`;
		div.innerHTML = addForm;
}
