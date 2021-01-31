let todoListInput = document.querySelector('.todo-list__input');
let todoListButton = document.querySelector('.todo-list__button');
let todoListDeleteItem = document.querySelector('.todo-list__delete-item');


let todoListItem;
let todoListText;
let todoListButtonDelete;


function createHtmlElement() {
    todoListItem = document.createElement('li');
    todoListText = document.createElement('p');
    todoListButtonDelete = document.createElement('button');
}
function styleCssElement() {
    todoListItem.className = 'todo-list__item';
    todoListText.className = 'todo-list__text';
    todoListButtonDelete.className = 'todo-list__button-delete';
}
function textContentElement() {
    todoListButtonDelete.textContent = 'Delete';
}
function appendChildElement() {
    todoListItem.appendChild(todoListText);
    todoListItem.appendChild(todoListButtonDelete);
    todoListDeleteItem.appendChild(todoListItem);
}

todoListButton.addEventListener('click', () => {

    createHtmlElement();
    styleCssElement();
    textContentElement();
    appendChildElement();

    todoListText.textContent = todoListInput.value;

});
















// let todoListDeleteItem = document.querySelector('todo-list__delete-item')
// let todoListItem = document.querySelector('.todo-list__item');
// let todoListText = document.querySelector('.todo-list__text')
// let todoListButtonDelete = document.querySelector('.todo-list__button-delete')

// todoListButton.addEventListener('click', () => {
//     todoListItem.insertAdjacentHTML('beforebegin',
//         `<li class="todo-list__item">
//             <p class="todo-list__text">${todoListInput.value}</p >
//             <button class="todo-list__button todo-list__button-delete" id="btn-remove">
//                 REMOVE
//             </button>
//         </li > `);
//     console.log(todoListItem);
//     console.log(todoListText);
//     console.log(todoListInput.value);
// });


