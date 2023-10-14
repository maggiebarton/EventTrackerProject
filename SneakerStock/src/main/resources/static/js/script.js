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

	document.addEventListener('click', function(e) {
		let target = e.target.closest("#add");
		if (target) {
			e.preventDefault();
			console.log('event listener working')

			let sneaker = {
				collection: target.parentElement.collection.value,
				name: target.parentElement.name.value,
				size: target.parentElement.size.value,
				retailPrice: target.parentElement.retailPrice.value,
				releaseDate: target.parentElement.releaseDate.value,
				acquisitionDate: target.parentElement.acquisitionDate.value,
				colorway: target.parentElement.colorway.value,
				box: target.parentElement.box.value,
				imageURL: target.parentElement.imageURL.value,
				brand: {
					id: target.parentElement.brand.value
				},
				condition: {
					id: target.parentElement.condition.value
				}
			}

			createSneaker(sneaker);
		}
	})

}

function createSneaker(sneaker) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/sneakers');

	// specify JSON request body
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let createdSneaker = JSON.parse(xhr.responseText);
				
			} else {
				//TODO
			}
		}
	}
	let sneakerJson = JSON.stringify(sneaker);
	xhr.send(sneakerJson);
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

function loadAllBrands() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/brands');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let brands = JSON.parse(xhr.responseText);
				//TODO
			} else {
				//TODO
			}
		}
	}
	xhr.send();
}

function loadAllConditions() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/conditions');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let conditions = JSON.parse(xhr.responseText);
				//TODO
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
			let details = sneaker.brand.name.toUpperCase() + " " + sneaker.collection.toUpperCase() + " '" + sneaker.name.toUpperCase() + "'" + "<br>" +
				"Retail Price: $" + sneaker.retailPrice + "<br>" +
				"Colorway: " + sneaker.colorway + "<br>" +
				"Size: " + sneaker.size + "<br>" +
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
	
				<label for="acquisitionDate">Added to Collection:</label><br>
				<input type="date" name="acquisitionDate"><br>
				
				<label for="colorway">Colorway:</label><br>
				<input type="text" name="colorway"><br>
				
				<label for="size">Size:</label><br>
				<input type="number" name="size"><br>
				
				<label for="imageURL">Image URL:</label><br>
				<input type="text" name="imageURL"><br>
				
				<label for="box">Has box?</label><br>
				<input type="radio" id="true" name="box" value="true">
				<label for="true">Yes</label>
				<input type="radio" id="false" name="box" value="false">
				<label for="false">No</label><br>
				
				<label for="brand">Brand:</label><br>
				<select id="brand" name="brand">
				 	<option value=1>Nike</option>
  					<option value=2>Air Jordan</option>
  					<option value=3>Adidas</option>
 					<option value=4>Reebok</option>
 					<option value=5>Heelys</option>
 					<option value=6>Adidas x Star Wars</option>
				</select> <br>
				
				
				
				<label for="condition">Condition:</label><br>
				<select id="condition" name="condition">
					<option value=1>New</option>
  					<option value=2>Used - Like New</option>
  					<option value=3>Used - Good</option>
 					<option value=4>Used - Fair</option>
 					<option value=5>Used - Beat</option>
				</select> <br>
				
				<button id="add">Add to Collection</button>
	
		</form>`;
	div.innerHTML = addForm;

}
