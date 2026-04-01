const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

itemForm.addEventListener('submit', function (e) {
	e.preventDefault();
	if (itemInput.value === '') {
		alert('Please enter an item');
		return;
	} else {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(itemInput.value));
		const deleteBtn = document.createElement('button');
		deleteBtn.className = 'remove-item btn-link text-red';
		li.appendChild(deleteBtn);
		const deleteIcon = document.createElement('i');
		deleteIcon.className = 'fa-solid fa-xmark';
		deleteBtn.appendChild(deleteIcon);
		itemList.appendChild(li);
		itemInput.value = '';
	}
});
