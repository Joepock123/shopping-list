const submitButton = document.querySelector('#submitButton');
const shoppingItem = document.querySelector('#shoppingItem')
const shoppingList = document.querySelector('.shopping-list');

submitButton.addEventListener('click', event => {
    event.preventDefault();
    if(shoppingItem.value === '') return
    addListItem(shoppingItem.value)
    shoppingItem.value = '';
})

const addListItem = (listItem) => {
    let newListItem = document.createElement('li');
    let newSpan = document.createElement('span');
    newSpan.textContent = listItem;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Want to add a input element with checkbox type
    let checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');

    newListItem.appendChild(newSpan);
    newListItem.appendChild(checkboxInput);
    newListItem.appendChild(deleteButton);
    shoppingList.appendChild(newListItem);

    deleteButton.addEventListener('click', event => {
        shoppingList.removeChild(newListItem);
    })

    shoppingItem.focus();
}

// Using <template>
const shoppingListTemplate = document.querySelector('.shopping-list-template');
