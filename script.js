// 
// To-Do List
// by Nathan Lee
//

function todoList() {
	let item = document.getElementById("inputItem").value;
	if (item === '') {
		document.getElementById('error-message').innerHTML = 'Oops, you left it blank! Try again.';
		todoList();
	}
	document.getElementById('error-message').innerHTML = '';
	
	let text = document.createTextNode(item),
		newItem = document.createElement('li'),
		checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.name = "name";
			checkbox.value = "value";
			checkbox.id = "id";
	
	newItem.appendChild(checkbox);
	newItem.appendChild(text);
	
	document.getElementById('todoList').appendChild(newItem);
	return text;
}